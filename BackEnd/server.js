import express from "express";

const APP = express();
const PORT = 3000;

APP.get("/", (req, res) => {
  res.send("Hello, World!");
});
APP.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
