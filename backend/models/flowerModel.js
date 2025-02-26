const db = require("../db");

// ฟังก์ชันดึงข้อมูลสินค้าทั้งหมด
const getAllFlowers = (callback) => {
  // ใช้ CONCAT เพื่อรวม URL ของรูปภาพ
  db.query(
    "SELECT id, name, price, CONCAT('http://localhost:5000/uploads/', imageUrl) AS imageUrl FROM flowers",
    callback
  );
};

// ฟังก์ชันเพิ่มสินค้า
const addFlower = (name, price, imageUrl, callback) => {
  db.query(
    "INSERT INTO flowers (name, price, imageUrl) VALUES (?, ?, ?)",
    [name, price, imageUrl],  // ส่งข้อมูลสินค้าไปพร้อม URL รูปภาพ
    callback
  );
};

// ฟังก์ชันอัปเดตสินค้า
const updateFlower = (id, name, price, imageUrl, callback) => {
  db.query(
    "UPDATE flowers SET name = ?, price = ?, imageUrl = ? WHERE id = ?",
    [name, price, imageUrl, id], // อัปเดตข้อมูลสินค้า
    callback
  );
};

// ฟังก์ชันลบสินค้า
const deleteFlower = (id, callback) => {
  db.query("DELETE FROM flowers WHERE id = ?", [id], callback);
};

module.exports = { getAllFlowers, addFlower, updateFlower, deleteFlower };
