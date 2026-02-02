import express from "express";
import { authenticateToken } from "../middleware/auth";
import { MessageController } from "../controllers/messageController";
import {
  SendMessageSchema,
  MessageIdParamSchema,
  OtherUserIdParamSchema,
} from "../schemas/messageSchemas";
import { validateBody, validateParams } from "../middleware/validation";

const router = express.Router();

// All roles are allowed to access messaging, but authentication is required
router.use(authenticateToken);

// Send a new message (with validation)
router.post(
  "/",
  validateBody(SendMessageSchema),
  MessageController.sendMessage
);

// List all chats for the user
router.get("/chats", MessageController.getChats);

// Get all messages in a chat (between user and another user)
router.get(
  "/chat/:otherUserId",
  validateParams(OtherUserIdParamSchema),
  MessageController.getChatMessages
);

// Mark a message as read
router.put(
  "/:messageId/read",
  validateParams(MessageIdParamSchema),
  MessageController.markAsRead
);

// Get authorized contacts
router.get("/contacts", MessageController.getContacts);

// Get unread message count
router.get("/unread-count", MessageController.getUnreadCount);

export default router;
