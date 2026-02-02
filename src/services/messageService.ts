import { prisma } from "../config/database";

export class MessageService {
  // Send a new message (instant messaging style)
  static async sendMessage({
    senderId,
    receiverId,
    content,
  }: {
    senderId: string;
    receiverId: string;
    content: string;
  }) {
    // Find or create a chat (thread) between the two users
    let chat = await prisma.messageThread.findFirst({
      where: {
        participantIds: { hasEvery: [senderId, receiverId] },
      },
    });
    if (chat && chat.participantIds.length !== 2) chat = null;
    if (!chat) {
      chat = await prisma.messageThread.create({
        data: {
          participantIds: [senderId, receiverId],
          lastMessageAt: new Date(),
        },
      });
    } else {
      await prisma.messageThread.update({
        where: { id: chat.id },
        data: { lastMessageAt: new Date() },
      });
    }
    // Create the message
    const message = await prisma.message.create({
      data: {
        content,
        senderId,
        receiverId,
        threadId: chat.id,
      },
      include: {
        sender: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
          },
        },
        receiver: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
          },
        },
      },
    });
    return message;
  }

  // List all chats for a user (with last message and unread count)
  static async getChatsForUser(userId: string) {
    const chats = await prisma.messageThread.findMany({
      where: { participantIds: { has: userId } },
      orderBy: { lastMessageAt: "desc" },
      include: {
        messages: {
          orderBy: { createdAt: "desc" },
          take: 1,
          include: { sender: true },
        },
      },
    });
    // Only chats with exactly 2 participants
    const filteredChats = chats.filter(
      (chat) => chat.participantIds.length === 2
    );
    // For each chat, get the other participant and unread count
    return Promise.all(
      filteredChats.map(async (chat) => {
        const otherUserId = chat.participantIds.find((id) => id !== userId);
        const otherUser = await prisma.user.findUnique({
          where: { id: otherUserId },
        });
        const unreadCount = await prisma.message.count({
          where: { threadId: chat.id, receiverId: userId, isRead: false },
        });
        return {
          id: chat.id,
          lastMessageAt: chat.lastMessageAt,
          lastMessage: chat.messages[0] || null,
          otherParticipant: otherUser,
          unreadCount,
        };
      })
    );
  }

  // Get all messages in a chat (between two users)
  static async getChatMessages(userId: string, otherUserId: string) {
    // Find the chat (thread) between the two users
    let chat = await prisma.messageThread.findFirst({
      where: {
        participantIds: { hasEvery: [userId, otherUserId] },
      },
    });
    if (chat && chat.participantIds.length !== 2) chat = null;
    if (!chat) return [];
    // Get all messages in this chat
    return prisma.message.findMany({
      where: { threadId: chat.id },
      orderBy: { createdAt: "asc" },
      include: {
        sender: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
          },
        },
        receiver: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
          },
        },
      },
    });
  }

  // Mark a message as read
  static async markAsRead(messageId: string, userId: string): Promise<boolean> {
    const message = await prisma.message.findUnique({
      where: { id: messageId },
    });
    if (!message || message.receiverId !== userId) return false;
    if (message.isRead) return true;
    await prisma.message.update({
      where: { id: messageId },
      data: { isRead: true, readAt: new Date() },
    });
    return true;
  }

  // Get authorized contacts (keep as is for now)
  static async getAuthorizedContacts(userId: string): Promise<
    Array<{
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      role: string;
      building?: string;
    }>
  > {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        studentProfile: true,
        parentProfile: {
          include: {
            childrenAsMother: true,
            childrenAsFather: true,
          },
        },
        wardenProfile: true,
      },
    });

    if (!user) return [];

    const contacts = [] as any;

    switch (user.role) {
      case "PARENT":
        // Parent can message wardens of their children's buildings
        // Combine children from both mother and father relations
        const allChildren = [
          ...(user.parentProfile?.childrenAsMother || []),
          ...(user.parentProfile?.childrenAsFather || []),
        ];
        const childrenBuildings = allChildren
          .map((child) => child.building)
          .filter(
            (building): building is NonNullable<typeof building> =>
              building !== null
          );

        if (childrenBuildings.length > 0) {
          const wardens = await prisma.user.findMany({
            where: {
              role: "WARDEN",
              wardenProfile: {
                assignedBuilding: { in: childrenBuildings },
              },
            },
            include: { wardenProfile: true },
          });

          contacts.push(
            ...wardens.map((warden) => ({
              id: warden.id,
              firstName: warden.firstName,
              lastName: warden.lastName,
              email: warden.email,
              role: warden.role,
              building: warden.wardenProfile?.assignedBuilding || undefined,
            }))
          );
        }

        // Parent can message their children (students)
        // Use the already combined children list
        if (allChildren.length > 0) {
          const childrenUsers = await prisma.user.findMany({
            where: {
              role: "STUDENT",
              studentProfile: {
                OR: [
                  { motherProfileId: user.parentProfile?.id },
                  { fatherProfileId: user.parentProfile?.id },
                ],
              },
            },
            include: { studentProfile: true },
          });

          contacts.push(
            ...childrenUsers.map((child) => ({
              id: child.id,
              firstName: child.firstName,
              lastName: child.lastName,
              email: child.email,
              role: child.role,
              building: child.studentProfile?.building || undefined,
            }))
          );
        }

        // Parent can message Chief Warden
        const chiefWardensforP = await prisma.user.findMany({
          where: { role: "CHIEF_WARDEN" },
          include: { chiefWardenProfile: true },
        });

        if (chiefWardensforP.length > 0) {
          for (const w of chiefWardensforP) {
            contacts.push({
              id: w.id,
              firstName: w.firstName,
              lastName: w.lastName,
              email: w.email,
              role: w.role,
            });
          }
        }
        break;

      case "WARDEN":
        // Warden can message parents of students in their building and students in their building
        const wardenBuilding = user.wardenProfile?.assignedBuilding;

        if (wardenBuilding) {
          // Get students in warden's building
          const students = await prisma.user.findMany({
            where: {
              role: "STUDENT",
              studentProfile: { building: wardenBuilding },
            },
          });

          contacts.push(
            ...students.map((student) => ({
              id: student.id,
              firstName: student.firstName,
              lastName: student.lastName,
              email: student.email,
              role: student.role,
              building: wardenBuilding as string,
            }))
          ) as any;

          // Get parents of students in warden's building
          const parents = await prisma.user.findMany({
            where: {
              role: "PARENT",
              parentProfile: {
                OR: [
                  {
                    childrenAsMother: {
                      some: { building: wardenBuilding },
                    },
                  },
                  {
                    childrenAsFather: {
                      some: { building: wardenBuilding },
                    },
                  },
                ],
              },
            },
          });

          contacts.push(
            ...parents.map((parent) => ({
              id: parent.id,
              firstName: parent.firstName,
              lastName: parent.lastName,
              email: parent.email,
              role: parent.role,
              building: wardenBuilding as string,
            }))
          );
        }

        // Warden can message Chief Warden
        const chiefWardensforW = await prisma.user.findMany({
          where: { role: "CHIEF_WARDEN" },
          include: { chiefWardenProfile: true },
        });

        if (chiefWardensforW.length > 0) {
          for (const w of chiefWardensforW) {
            contacts.push({
              id: w.id,
              firstName: w.firstName,
              lastName: w.lastName,
              email: w.email,
              role: w.role,
            });
          }
        }
        break;

      case "STUDENT":
        // Student can message their parents (both mother and father), their building's warden, and Chief Warden
        const studentBuilding = user.studentProfile?.building;
        const motherProfileId = user.studentProfile?.motherProfileId;
        const fatherProfileId = user.studentProfile?.fatherProfileId;

        // Get both parents
        const parentIds = [motherProfileId, fatherProfileId].filter(
          (id): id is string => id !== null && id !== undefined
        );

        if (parentIds.length > 0) {
          const parents = await prisma.user.findMany({
            where: {
              parentProfile: {
                id: { in: parentIds },
              },
            },
            include: { parentProfile: true },
          });

          contacts.push(
            ...parents.map((parent) => ({
              id: parent.id,
              firstName: parent.firstName,
              lastName: parent.lastName,
              email: parent.email,
              role: parent.role,
            }))
          );
        }

        // Get building warden
        if (studentBuilding) {
          const warden = await prisma.user.findFirst({
            where: {
              role: "WARDEN",
              wardenProfile: { assignedBuilding: studentBuilding },
            },
            include: { wardenProfile: true },
          });

          if (warden) {
            contacts.push({
              id: warden.id,
              firstName: warden.firstName,
              lastName: warden.lastName,
              email: warden.email,
              role: warden.role,
              building: studentBuilding as string,
            });
          }
        }

        // Student can message Chief Warden
        const chiefWardensforS = await prisma.user.findMany({
          where: { role: "CHIEF_WARDEN" },
          include: { chiefWardenProfile: true },
        });

        if (chiefWardensforS.length > 0) {
          for (const w of chiefWardensforS) {
            contacts.push({
              id: w.id,
              firstName: w.firstName,
              lastName: w.lastName,
              email: w.email,
              role: w.role,
            });
          }
        }
        break;

      case "CHIEF_WARDEN":
        // Chief Warden can message all wardens, students, and parents
        const allWardens = await prisma.user.findMany({
          where: { role: "WARDEN" },
          include: { wardenProfile: true },
        });

        contacts.push(
          ...allWardens.map((warden) => ({
            id: warden.id,
            firstName: warden.firstName,
            lastName: warden.lastName,
            email: warden.email,
            role: warden.role,
            building: warden.wardenProfile?.assignedBuilding || undefined,
          }))
        );

        const allStudents = await prisma.user.findMany({
          where: { role: "STUDENT" },
          include: { studentProfile: true },
        });

        contacts.push(
          ...allStudents.map((student) => ({
            id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            role: student.role,
            building: student.studentProfile?.building || undefined,
          }))
        );

        const allParents = await prisma.user.findMany({
          where: { role: "PARENT" },
        });

        contacts.push(
          ...allParents.map((parent) => ({
            id: parent.id,
            firstName: parent.firstName,
            lastName: parent.lastName,
            email: parent.email,
            role: parent.role,
          }))
        );
        break;
    }

    return contacts;
  }

  // Get unread message count for a user
  static async getUnreadCount(userId: string): Promise<number> {
    return await prisma.message.count({
      where: { receiverId: userId, isRead: false },
    });
  }

  // Broadcast message to all users of a specific role (STUDENT or PARENT)
  static async broadcastMessage({
      senderId,
      content,
      targetRole,
    }: {
      senderId: string;
      content: string;
      targetRole: "STUDENT" | "PARENT";
    }) {
      // Fire-and-forget (do NOT await)
      setImmediate(() => {
        BroadcastService.runBroadcast({
          senderId,
          content,
          targetRole,
        });
      });

      // Instant response to sender
      return {
        status: "BROADCAST_STARTED",
        targetRole,
      };
    }

}
class BroadcastService {
  static async runBroadcast({
    senderId,
    content,
    targetRole,
  }: {
    senderId: string;
    content: string;
    targetRole: "STUDENT" | "PARENT";
  }) {
    const BATCH_SIZE = 30;

    let skip = 0;

    while (true) {
      const users = await prisma.user.findMany({
        where: { role: targetRole },
        select: { id: true },
        skip,
        take: BATCH_SIZE,
      });

      if (users.length === 0) break;

      for (const u of users) {
        try {
          await BroadcastService.sendToUser(
            senderId,
            u.id,
            content
          );
        } catch (e) {
          console.error("Broadcast failed for", u.id, e);
        }
      }

      skip += BATCH_SIZE;
    }

    console.log("✅ Broadcast completed");
  }
  static async sendToUser(
  senderId: string,
  receiverId: string,
  content: string
) {
  let chat = await prisma.messageThread.findFirst({
    where: {
      participantIds: { hasEvery: [senderId, receiverId] },
    },
  });

  if (!chat || chat.participantIds.length !== 2) {
    chat = await prisma.messageThread.create({
      data: {
        participantIds: [senderId, receiverId],
        lastMessageAt: new Date(),
      },
    });
  } else {
    await prisma.messageThread.update({
      where: { id: chat.id },
      data: { lastMessageAt: new Date() },
    });
  }

  await prisma.message.create({
    data: {
      content,
      senderId,
      receiverId,
      threadId: chat.id,
    },
  });
}

}
