import { PrismaClient } from "../../generated/prisma";

export const prisma = new PrismaClient({
  log: ["warn", "error"], // Enable logging for debugging
  errorFormat: "minimal", // Use minimal error format for better performance
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// Handle connection errors gracefully
prisma.$connect().catch((err) => {
  console.error("Failed to connect to database:", err.message);
});

// Graceful shutdown
process.on("beforeExit", async () => {
  await prisma.$disconnect();
});
