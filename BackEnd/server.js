import express from "express";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

const APP = express();
const PORT = 3000;

APP.get("/", (req, res) => {
  res.send("Hello, World!");
});
APP.listen(PORT, () => {
  connectDB()
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error("Database connection error:", error));
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
