const express = require("express");
const multer = require("multer");
const path = require("path");
const db = require("../db");

const router = express.Router();

// ตั้งค่าการอัปโหลดไฟล์
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // ตั้งชื่อไฟล์ใหม่
  }
});

const upload = multer({ storage: storage });

// API สำหรับการเพิ่มสินค้า
router.post("/", upload.single("image"), (req, res) => {
  const { name, price } = req.body;
  const imageUrl = req.file.filename; // ใช้ชื่อไฟล์ที่ได้จาก multer

  db.query("INSERT INTO flowers (name, price, imageUrl) VALUES (?, ?, ?)", [name, price, imageUrl], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error adding flower" });
    }
    res.json({ message: "Flower added successfully!" });
  });
});

module.exports = router;
