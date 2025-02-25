const db = require("../db");

const getAllFlowers = (callback) => {
  db.query("SELECT * FROM flowers", callback);
};

const addFlower = (name, price, imageUrl, callback) => {
  db.query("INSERT INTO flowers (name, price, imageUrl) VALUES (?, ?, ?)", [name, price, imageUrl], callback);
};

const updateFlower = (id, name, price, imageUrl, callback) => {
  db.query("UPDATE flowers SET name = ?, price = ?, imageUrl = ? WHERE id = ?", [name, price, imageUrl, id], callback);
};

const deleteFlower = (id, callback) => {
  db.query("DELETE FROM flowers WHERE id = ?", [id], callback);
};

module.exports = { getAllFlowers, addFlower, updateFlower, deleteFlower };
