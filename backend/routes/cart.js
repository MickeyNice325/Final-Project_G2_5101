const express = require("express");
const verifyToken = require("../middleware/authMiddleware");  // ใช้ token สำหรับตรวจสอบตัวตน
const db = require("../db");

const router = express.Router();

// เพิ่มสินค้าไปที่ตะกร้า
router.post("/", verifyToken, (req, res) => {
  const { flowerId, quantity } = req.body;
  const userId = req.user.id;  // ดึง userId จากข้อมูลใน token

  // ตรวจสอบให้แน่ใจว่าเราได้รับ flowerId และ quantity
  if (!flowerId || !quantity) {
    return res.status(400).json({ message: "Flower ID and quantity are required" });
  }

  // บันทึกข้อมูลลงในฐานข้อมูล
  db.query(
    "INSERT INTO cart (user_id, flower_id, quantity) VALUES (?, ?, ?)",
    [userId, flowerId, quantity],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error adding to cart" });
      }
      res.json({ message: "Flower added to cart successfully!" });
    }
  );
});

module.exports = router;
