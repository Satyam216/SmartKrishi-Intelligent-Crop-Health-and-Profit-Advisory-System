import express from "express";
import upload from "../config/multer.js";
import verifyFirebaseToken from "../middleware/verifyFirebaseToken.js";
import { uploadProfileImage } from "../controllers/uploadController.js";

const router = express.Router();

router.post(
  "/profile-image",
  verifyFirebaseToken,
  upload.single("image"),
  uploadProfileImage
);

export default router;