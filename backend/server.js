import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import uploadRoutes from "./routes/uploadRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use("/api/upload", uploadRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/location", locationRoutes);

app.get("/", (req, res) => {
  res.send("SmartKrishi Backend Running");
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
