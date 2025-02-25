const express = require("express");
const multer = require("multer");
const path = require("path");
const { getAllFlowers, addFlower, updateFlower, deleteFlower } = require("../models/flowerModel");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

// ตั้งค่าการอัปโหลดไฟล์
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// ✅ API ดึงสินค้าทั้งหมด
router.get("/", (req, res) => {
  getAllFlowers((err, results) => {
    if (err) return res.status(500).json({ message: "Error fetching flowers", error: err });
    res.json(results);
  });
});

// ✅ API เพิ่มสินค้า + อัปโหลดรูป
router.post("/", verifyToken, upload.single("image"), (req, res) => {
  const { name, price } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  if (!name || !price || !imageUrl) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  addFlower(name, price, imageUrl, (err, result) => {
    if (err) return res.status(500).json({ message: "Error adding flower", error: err });
    res.json({ message: "Flower added successfully!", flowerId: result.insertId, imageUrl });
  });
});

// ✅ API อัปเดตสินค้า (รองรับการเปลี่ยนรูป)
router.put("/:id", verifyToken, upload.single("image"), (req, res) => {
  const { name, price } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.imageUrl;

  updateFlower(req.params.id, name, price, imageUrl, (err, result) => {
    if (err) return res.status(500).json({ message: "Error updating flower", error: err });
    res.json({ message: "Flower updated successfully!" });
  });
});

// ✅ API ลบสินค้า
router.delete("/:id", verifyToken, (req, res) => {
  deleteFlower(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ message: "Error deleting flower", error: err });
    res.json({ message: "Flower deleted successfully!" });
  });
});

module.exports = router;
