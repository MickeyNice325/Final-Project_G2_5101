require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const db = require("./db");
const authRoutes = require("./routes/auth");  // เพิ่มการ import สำหรับ auth.js

const app = express();

// เปิดใช้งาน CORS
app.use(cors());

// Middleware
app.use(express.json());

// ให้เข้าถึงโฟลเดอร์ uploads
app.use(express.static("uploads"));

// ใช้เส้นทาง /api/auth สำหรับการลงทะเบียนและล็อกอิน
app.use("/api/auth", authRoutes);  // เพิ่มเส้นทางนี้สำหรับ auth

// ตั้งค่าการเก็บไฟล์ที่อัปโหลด
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// เส้นทางสำหรับเพิ่มสินค้าใหม่ (รับข้อมูลสินค้าและไฟล์ภาพ)
app.post("/api/flowers", upload.single("image"), (req, res) => {
  const { name, price } = req.body;
  const imageUrl = req.file ? req.file.filename : null;

  // ตรวจสอบข้อมูลที่จำเป็นทั้งหมดก่อนบันทึกลงฐานข้อมูล
  if (!name || !price || !imageUrl) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  db.query(
    "INSERT INTO flowers (name, price, imageUrl) VALUES (?, ?, ?)",
    [name, price, imageUrl],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Error adding flower", error: err });
      res.status(201).json({ message: "Flower added successfully!" });
    }
  );
});

// เส้นทางสำหรับดึงสินค้าทั้งหมด
app.get("/api/flowers", (req, res) => {
  db.query("SELECT * FROM flowers", (err, results) => {
    if (err) return res.status(500).json({ message: "Error fetching flowers", error: err });
    res.json(results); // ส่งข้อมูลสินค้าทั้งหมดที่ดึงจากฐานข้อมูล
  });
});

// ให้บริการไฟล์ภาพที่อัปโหลด
app.use("/uploads", express.static("uploads"));

// กำหนดพอร์ตให้กับเซิร์ฟเวอร์
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
