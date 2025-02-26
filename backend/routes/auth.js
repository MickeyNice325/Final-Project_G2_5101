const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

// ✅ ลงทะเบียนผู้ใช้
router.post("/register", async (req, res) => {
  const { username, password, status } = req.body;
  
  db.query("SELECT * FROM users WHERE username = ?", [username], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length > 0) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
      "INSERT INTO users (username, password, status) VALUES (?, ?, ?)",
      [username, hashedPassword, status || "user"],
      (err, result) => {
        if (err) return res.status(500).json({ message: "Error registering user" });
        res.json({ message: "User registered successfully!" });
      }
    );
  });
});

// ✅ ล็อกอิน
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query("SELECT * FROM users WHERE username = ?", [username], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0) return res.status(400).json({ message: "User not found" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

    const token = jwt.sign({ userId: user.id, status: user.status }, process.env.SECRET_KEY, { expiresIn: "1h" });
    res.json({ token, status: user.status });
  });
});

module.exports = router;
