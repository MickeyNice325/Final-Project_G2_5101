const db = require("../db");

const createOrder = (userId, total, callback) => {
  db.query("INSERT INTO orders (userId, total) VALUES (?, ?)", [userId, total], callback);
};

const addOrderItems = (orderId, items, callback) => {
  const values = items.map(({ flowerId, quantity, price }) => [orderId, flowerId, quantity, price]);
  db.query("INSERT INTO order_items (orderId, flowerId, quantity, price) VALUES ?", [values], callback);
};

const getOrders = (userId, callback) => {
  db.query("SELECT * FROM orders WHERE userId = ?", [userId], callback);
};

module.exports = { createOrder, addOrderItems, getOrders };
