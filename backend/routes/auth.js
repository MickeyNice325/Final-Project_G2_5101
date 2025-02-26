const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

// ลงทะเบียนผู้ใช้ใหม่
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // ตรวจสอบหากมีผู้ใช้ที่ใช้ชื่อเดียวกันแล้ว
  db.query("SELECT * FROM users WHERE username = ?", [username], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length > 0) return res.status(400).json({ message: "User already exists" });

    // เข้ารหัสรหัสผ่าน
    const hashedPassword = await bcrypt.hash(password, 10);

    // เพิ่มผู้ใช้ใหม่
    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword], (err, result) => {
      if (err) return res.status(500).json({ message: "Error registering user" });
      res.json({ message: "User registered successfully!" });
    });
  });
});

// ล็อกอิน
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query("SELECT * FROM users WHERE username = ?", [username], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0) return res.status(400).json({ message: "User not found" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

    // สร้าง JWT token
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  });
});

module.exports = router;
