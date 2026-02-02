import { z } from "zod";

export const SendMessageSchema = z.object({
  receiverId: z.string().cuid(),
  content: z
    .string()
    .min(1, "Message cannot be empty")
    .max(1000, "Message must be less than 1000 characters")
    .refine((val) => !/<script.*?>.*?<\/script>/gi.test(val), {
      message: "Message cannot contain <script> tags",
    })
    .refine((val) => !/[<>]/.test(val), {
      message: "Message cannot contain raw HTML tags",
    }),
});

export const MessageIdParamSchema = z.object({
  messageId: z.string().cuid("Invalid message ID"),
});

export const OtherUserIdParamSchema = z.object({
  otherUserId: z.string().cuid("Invalid user ID"),
});
