const db = require("../db");

// ดึงข้อมูลทั้งหมดจากตาราง flowers
const getAllFlowers = (callback) => {
  db.query("SELECT * FROM flowers", callback);
};

// เพิ่มสินค้าใหม่ พร้อมกับ URL รูปภาพ
const addFlower = (name, price, imageUrl, callback) => {
  db.query(
    "INSERT INTO flowers (name, price, imageUrl) VALUES (?, ?, ?)",
    [name, price, imageUrl], // ส่งข้อมูลสินค้าพร้อม URL รูปภาพ
    callback
  );
};

// อัปเดตข้อมูลสินค้า
const updateFlower = (id, name, price, imageUrl, callback) => {
  db.query(
    "UPDATE flowers SET name = ?, price = ?, imageUrl = ? WHERE id = ?",
    [name, price, imageUrl, id], // อัปเดตข้อมูลสินค้า
    callback
  );
};

// ลบสินค้า
const deleteFlower = (id, callback) => {
  db.query("DELETE FROM flowers WHERE id = ?", [id], callback);
};

module.exports = { getAllFlowers, addFlower, updateFlower, deleteFlower };
