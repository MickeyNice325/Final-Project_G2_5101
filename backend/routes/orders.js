const express = require("express");
const { createOrder, addOrderItems, getOrders } = require("../models/orderModel");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
  getOrders(req.user.userId, (err, results) => {
    if (err) return res.status(500).json({ message: "Error fetching orders" });
    res.json(results);
  });
});

router.post("/", verifyToken, (req, res) => {
  const { total, items } = req.body;
  createOrder(req.user.userId, total, (err, result) => {
    if (err) return res.status(500).json({ message: "Error creating order" });

    addOrderItems(result.insertId, items, (err, result) => {
      if (err) return res.status(500).json({ message: "Error adding order items" });
      res.json({ message: "Order placed successfully!" });
    });
  });
});

module.exports = router;
