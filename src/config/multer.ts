import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "../../uploads/profile-pictures");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Generate unique filename: userId_timestamp.extension
    const userId = (req as any).user?.id || "unknown";
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `${userId}_${timestamp}${ext}`);
  },
});

// File filter - only accept images
const fileFilter = (req: any, file: any, cb: any) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, PNG, GIF, and WebP images are allowed."), false);
  }
};

// Configure multer
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max file size
  },
});

// Helper function to delete old profile picture
export const deleteOldProfilePicture = (filePath: string) => {
  // Don't delete if it's empty, null, or a default/external image URL
  if (!filePath) return;

  // Check if it's a default image or external URL (not from our uploads)
  const isDefaultImage =
    filePath.includes("default-avatar") ||
    filePath.includes("nicepng.com") ||
    filePath.includes("vectorstock.com") ||
    filePath.includes("default.png") ||
    filePath.includes("placeholder") ||
    filePath.startsWith("http://") && !filePath.includes("/uploads/") ||
    filePath.startsWith("https://") && !filePath.includes("/uploads/");

  if (isDefaultImage) {
    console.log(`ℹ️  Skipping deletion of default/external image: ${filePath}`);
    return;
  }

  // Extract filename from URL (handle both full URLs and relative paths)
  const filename = path.basename(filePath);
  const fullPath = path.join(uploadDir, filename);

  if (fs.existsSync(fullPath)) {
    try {
      fs.unlinkSync(fullPath);
      console.log(`✅ Deleted old profile picture: ${filename}`);
    } catch (error) {
      console.error(`❌ Error deleting old profile picture: ${error}`);
    }
  } else {
    console.log(`ℹ️  File not found for deletion: ${fullPath}`);
  }
};
