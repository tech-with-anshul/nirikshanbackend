import { Request, Response } from "express";
import { MessageService } from "../services/messageService";

export class MessageController {
  // Send a new message (chat style)
  static async sendMessage(req: Request, res: Response) {
    try {
      const senderId = (req as any).user.id;
      const { receiverId, content } = req.body;
      const message = await MessageService.sendMessage({
        senderId,
        receiverId,
        content,
      });

      res.status(201).json({
        success: true,
        message: "Message sent successfully",
        data: message,
      });
    } catch (error: any) {
      console.error("Error sending message:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to send message",
      });
    }
  }

  // List all chats for the authenticated user
  static async getChats(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const chats = await MessageService.getChatsForUser(userId);
      res.json({ success: true, data: chats });
    } catch (error: any) {
      console.error("Error fetching chats:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to fetch chats" });
    }
  }

  // Get all messages in a chat (between two users)
  static async getChatMessages(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const { otherUserId } = req.params;

      // Validation is handled by middleware, so we can trust the data
      const messages = await MessageService.getChatMessages(
        userId,
        otherUserId
      );
      res.json({ success: true, data: messages });
    } catch (error: any) {
      console.error("Error fetching chat messages:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to fetch chat messages" });
    }
  }

  // Mark a message as read
  static async markAsRead(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const { messageId } = req.params;

      // Validation is handled by middleware, so we can trust the data
      const success = await MessageService.markAsRead(messageId, userId);
      if (!success) {
        return res.status(404).json({
          success: false,
          message: "Message not found or access denied",
        });
      }
      res.json({ success: true, message: "Message marked as read" });
    } catch (error: any) {
      console.error("Error marking message as read:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to mark message as read" });
    }
  }

  // Get authorized contacts for messaging
  static async getContacts(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const contacts = await MessageService.getAuthorizedContacts(userId);
      res.json({ success: true, data: contacts });
    } catch (error: any) {
      console.error("Error fetching contacts:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to fetch contacts" });
    }
  }

  // Get unread message count
  static async getUnreadCount(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const count = await MessageService.getUnreadCount(userId);
      res.json({ success: true, data: { unreadCount: count } });
    } catch (error: any) {
      console.error("Error fetching unread count:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to fetch unread count" });
    }
  }
}
