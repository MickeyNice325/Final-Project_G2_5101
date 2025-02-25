const express = require("express");
const { getCart, addToCart, updateCartItem, deleteCartItem } = require("../models/cartModel");
const verifyToken = require("../middleware/authMiddleware");
const db = require("../db"); // เชื่อมกับ Database

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
  getCart(req.user.userId, (err, results) => {
    if (err) return res.status(500).json({ message: "Error fetching cart", error: err });
    res.json(results);
  });
});

router.post("/", verifyToken, (req, res) => {
  const { flowerId, quantity } = req.body;
  const userId = req.user.userId; // ดึง userId จาก JWT Token

  // ตรวจสอบว่า flowerId มีอยู่จริง
  db.query("SELECT * FROM flowers WHERE id = ?", [flowerId], (err, results) => {
    if (err) {
      console.error("Error checking flowerId:", err);
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (results.length === 0) {
      return res.status(400).json({ message: "Flower ID does not exist" });
    }

    // เพิ่มสินค้าเข้าในตะกร้า
    addToCart(userId, flowerId, quantity, (err, result) => {
      if (err) {
        console.error("Error adding to cart:", err);
        return res.status(500).json({ message: "Error adding to cart", error: err });
      }
      res.json({ message: "Added to cart!" });
    });
  });
});

router.put("/:id", verifyToken, (req, res) => {
  updateCartItem(req.params.id, req.body.quantity, (err, result) => {
    if (err) return res.status(500).json({ message: "Error updating cart", error: err });
    res.json({ message: "Cart updated!" });
  });
});

router.delete("/:id", verifyToken, (req, res) => {
  deleteCartItem(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ message: "Error deleting cart item", error: err });
    res.json({ message: "Item removed from cart!" });
  });
});

module.exports = router;
