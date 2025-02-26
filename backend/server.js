require("dotenv").config();
const express = require("express");
const multer = require("multer");
const path = require("path");
const db = require("./db");

const app = express();
app.use(express.json());
app.use(express.static("uploads"));  // ให้เข้าถึงโฟลเดอร์ uploads ได้

// กำหนด storage สำหรับ multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");  // กำหนดโฟลเดอร์ในการเก็บไฟล์
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // ตั้งชื่อไฟล์ให้ไม่ซ้ำ
  }
});

const upload = multer({ storage: storage });  // สร้าง multer middleware

// เส้นทางสำหรับเพิ่มสินค้าใหม่
app.post("/api/flowers", upload.single("image"), (req, res) => {
  const { name, price } = req.body;
  const imageUrl = req.file.filename; // เก็บชื่อไฟล์ภาพ

  db.query(
    "INSERT INTO flowers (name, price, imageUrl) VALUES (?, ?, ?)",
    [name, price, imageUrl],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Error adding flower" });
      res.status(201).json({ message: "Flower added successfully!" });
    }
  );
});

// เส้นทางที่ให้บริการการเข้าถึงไฟล์ที่อัปโหลด
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
