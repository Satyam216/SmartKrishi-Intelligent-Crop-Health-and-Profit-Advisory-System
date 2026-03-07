import cloudinary from "../config/cloudinary.js";
import { db } from "../config/firebaseAdmin.js";
import streamifier from "streamifier";

export const uploadProfileImage = async (req, res) => {

  try {

    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const streamUpload = () => {
      return new Promise((resolve, reject) => {

        const stream = cloudinary.uploader.upload_stream(
          { folder: "smartkrishi_profiles" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );

        streamifier.createReadStream(file.buffer).pipe(stream);

      });
    };

    const result = await streamUpload();

    const imageUrl = result.secure_url;

    const uid = req.user.uid;

    await db.collection("users").doc(uid).update({
      photoURL: imageUrl
    });

    res.json({
      message: "Profile image updated",
      photoURL: imageUrl
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Upload failed"
    });

  }

};