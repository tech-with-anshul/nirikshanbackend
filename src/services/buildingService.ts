import { prisma } from "../config/database";

export interface BuildingInfo {
  name: string;
  totalStudents: number;
  totalRooms: number;
  occupiedRooms: number;
  availableRooms: number;
  wardens: string[]; // Warden names assigned to this building
  occupancyRate: number; // Percentage of rooms occupied
}

export interface BuildingStudentInfo {
  id: string;
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
  roomNumber?: string;
  floorNumber?: string;
  building: string;
  checkInDate?: string;
  parentInfo?: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface BuildingRoomInfo {
  id: string;
  roomNumber: string;
  floorNumber: string;
  building: string;
  capacity: number;
  isOccupied: boolean;
  students: Array<{
    firstName: string;
    lastName: string;
    email: string | null;
  }>;
}

export class BuildingService {
  static async getAllBuildings(): Promise<string[]> {
    try {
      // Fetch all buildings from the database
      const buildings = await prisma.building.findMany({
        select: {
          name: true,
        },
        orderBy: {
          name: 'asc',
        },
      });

      // Return array of building names
      return buildings.map(b => b.name);
    } catch (error) {
      console.error("Error getting all buildings:", error);
      throw new Error("Failed to retrieve buildings");
    }
  }

  static async getBuildingStatistics(): Promise<BuildingInfo[]> {
    try {
      const buildings = await this.getAllBuildings();

      const stats = await Promise.all(
        buildings.map(async (building) => {
          const [studentsCount, roomsCount, occupiedRoomsCount, wardens] =
            await Promise.all([
              // Count students in this building
              prisma.studentProfile.count({
                where: { building },
              }),

              // Count total rooms in this building
              prisma.room.count({
                where: { building },
              }),

              // Count occupied rooms in this building
              prisma.room.count({
                where: {
                  building,
                  isOccupied: true,
                },
              }),

              // Get wardens assigned to this building
              prisma.wardenProfile.findMany({
                where: { assignedBuilding: building },
                include: {
                  user: {
                    select: {
                      firstName: true,
                      lastName: true,
                    },
                  },
                },
              }),
            ]);

          const occupancyRate =
            roomsCount > 0 ? (occupiedRoomsCount / roomsCount) * 100 : 0;

          return {
            name: building,
            totalStudents: studentsCount,
            totalRooms: roomsCount,
            occupiedRooms: occupiedRoomsCount,
            availableRooms: roomsCount - occupiedRoomsCount,
            wardens: wardens.map(
              (w) => `${w.user.firstName} ${w.user.lastName}`
            ),
            occupancyRate: Math.round(occupancyRate * 100) / 100, // Round to 2 decimal places
          };
        })
      );

      return stats;
    } catch (error) {
      console.error("Error getting building statistics:", error);
      throw new Error("Failed to retrieve building statistics");
    }
  }

  static async getStudentsInBuilding(
    building: string
  )
  // : Promise<BuildingStudentInfo[]> 
  {
    try {
      // Validate building exists
      const buildingExists = await prisma.building.findUnique({
        where: { name: building },
      });

      if (!buildingExists) {
        throw new Error(`Invalid building: ${building}`);
      }

      const students = await prisma.studentProfile.findMany({
        where: { building },
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
          motherProfile: {
            include: {
              user: {
                select: {
                  firstName: true,
                  lastName: true,
                  email: true,
                },
              },
            },
          },
          fatherProfile: {
            include: {
              user: {
                select: {
                  firstName: true,
                  lastName: true,
                  email: true,
                },
              },
            },
          },
        },
        orderBy: {
          user: {
            firstName: "asc",
          },
        },
      });

      return students.map((student) => ({
        id: student.id,
        studentId: student.studentId,
        firstName: student.user.firstName,
        lastName: student.user.lastName,
        email: student.user.email,
        roomNumber: student.roomNumber || undefined,
        floorNumber: student.floorNumber || undefined,
        building: student.building!,
        checkInDate: student.checkInDate?.toISOString() || undefined,
        motherInfo: student.motherProfile
          ? {
              firstName: student.motherProfile.user.firstName,
              lastName: student.motherProfile.user.lastName,
              email: student.motherProfile.user.email,
            }
          : undefined,
        fatherInfo: student.fatherProfile
          ? {
              firstName: student.fatherProfile.user.firstName,
              lastName: student.fatherProfile.user.lastName,
              email: student.fatherProfile.user.email,
            }
          : undefined,
      }));
    } catch (error) {
      console.error("Error getting students in building:", error);
      throw new Error(`Failed to retrieve students in building ${building}`);
    }
  }

  static async getWardenBuilding(userId: string): Promise<string | null> {
    try {
      const wardenProfile = await prisma.wardenProfile.findUnique({
        where: { userId },
        select: { assignedBuilding: true },
      });

      return wardenProfile?.assignedBuilding || null;
    } catch (error) {
      console.error("Error getting warden building:", error);
      throw new Error("Failed to retrieve warden building assignment");
    }
  }

  static async getRoomsInBuilding(
    building: string
  ): Promise<BuildingRoomInfo[]> {
    try {
      // Validate building exists
      const buildingExists = await prisma.building.findUnique({
        where: { name: building },
      });
      if (!buildingExists) {
        throw new Error(`Invalid building: ${building}`);
      }

      const rooms = await prisma.room.findMany({
        where: { building },
        include: {
          students: {
            include: {
              user: {
                select: {
                  firstName: true,
                  lastName: true,
                  email: true,
                },
              },
            },
          },
        },
        orderBy: {
          roomNumber: "asc",
        },
      });

      return rooms.map((room) => ({
        id: room.id,
        roomNumber: room.roomNumber,
        floorNumber: room.floorNumber,
        building: room.building,
        capacity: room.capacity,
        isOccupied: room.isOccupied,
        students: room.students.map((student) => ({
          firstName: student.user.firstName,
          lastName: student.user.lastName,
          email: student.user.email,
        })),
      }));
    } catch (error) {
      console.error("Error getting rooms in building:", error);
      throw new Error(`Failed to retrieve rooms in building ${building}`);
    }
  }

  // Get building summary for dashboard
  static async getBuildingSummary(building: string) {
    try {
      const [students, rooms, wardens] = await Promise.all([
        this.getStudentsInBuilding(building),
        this.getRoomsInBuilding(building),
        prisma.wardenProfile.findMany({
          where: { assignedBuilding: building },
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
                email: true,
              },
            },
          },
        }),
      ]);

      return {
        building,
        totalStudents: students.length,
        totalRooms: rooms.length,
        occupiedRooms: rooms.filter((room) => room.isOccupied).length,
        availableRooms: rooms.filter((room) => !room.isOccupied).length,
        wardens: wardens.map((w) => ({
          name: `${w.user.firstName} ${w.user.lastName}`,
          email: w.user.email,
        })),
        occupancyRate:
          rooms.length > 0
            ? Math.round(
                (rooms.filter((room) => room.isOccupied).length /
                  rooms.length) *
                  100 *
                  100
              ) / 100
            : 0,
      };
    } catch (error) {
      console.error("Error getting building summary:", error);
      throw new Error(`Failed to retrieve building summary for ${building}`);
    }
  }

  // Assign warden to building
  static async assignWardenToBuilding(userId: string, building: string) {
    try {
      // Validate building exists
      const buildingExists = await prisma.building.findUnique({
        where: { name: building },
      });
      if (!buildingExists) {
        throw new Error(`Invalid building: ${building}`);
      }

      // Check if user is a warden
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { wardenProfile: true },
      });

      if (!user || user.role !== "WARDEN") {
        throw new Error("User must be a warden to be assigned to a building");
      }

      // Update warden profile with building assignment
      const updatedProfile = await prisma.wardenProfile.update({
        where: { userId },
        data: { assignedBuilding: building },
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
      });

      return {
        message: `Warden ${updatedProfile.user.firstName} ${updatedProfile.user.lastName} assigned to building ${building}`,
        warden: updatedProfile,
      };
    } catch (error) {
      console.error("Error assigning warden to building:", error);
      throw new Error("Failed to assign warden to building");
    }
  }
}
