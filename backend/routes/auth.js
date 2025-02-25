const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerUser, getUserByUsername } = require("../models/userModel");
const verifyToken = require("../middleware/authMiddleware");
require("dotenv").config(); // ✅ โหลดตัวแปรจาก .env

const router = express.Router();

// ✅ สมัครสมาชิก
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  registerUser(username, hashedPassword, (err, result) => {
    if (err) return res.status(500).json({ message: "Error registering user" });
    res.json({ message: "User registered successfully!" });
  });
});

// ✅ ล็อกอิน
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  getUserByUsername(username, async (err, results) => {
    if (err || results.length === 0) return res.status(400).json({ message: "User not found" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

    // ✅ ใช้ process.env.SECRET_KEY แทนค่าตายตัว
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  });
});

// ✅ ตรวจสอบ JWT Token และคืนค่าผู้ใช้ที่ล็อกอินอยู่
router.get("/user", verifyToken, (req, res) => {
  res.json({ message: "Authenticated User", user: req.user });
});

module.exports = router;
