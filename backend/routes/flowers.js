const express = require("express");
const { getAllFlowers, addFlower, updateFlower, deleteFlower } = require("../models/flowerModel");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", (req, res) => {
  getAllFlowers((err, results) => {
    if (err) return res.status(500).json({ message: "Error fetching flowers" });
    res.json(results);
  });
});

router.post("/", verifyToken, (req, res) => {
  const { name, price, imageUrl } = req.body;
  addFlower(name, price, imageUrl, (err, result) => {
    if (err) return res.status(500).json({ message: "Error adding flower" });
    res.json({ id: result.insertId, name, price, imageUrl });
  });
});

router.put("/:id", verifyToken, (req, res) => {
  const { name, price, imageUrl } = req.body;
  updateFlower(req.params.id, name, price, imageUrl, (err, result) => {
    if (err) return res.status(500).json({ message: "Error updating flower" });
    res.json({ message: "Flower updated successfully!" });
  });
});

router.delete("/:id", verifyToken, (req, res) => {
  deleteFlower(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ message: "Error deleting flower" });
    res.json({ message: "Flower deleted successfully!" });
  });
});

module.exports = router;
