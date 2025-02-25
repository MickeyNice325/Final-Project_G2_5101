const db = require("../db");

const getCart = (userId, callback) => {
  db.query("SELECT * FROM cart WHERE userId = ?", [userId], (err, results) => {
    if (err) {
      console.error("Error fetching cart:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

const addToCart = (userId, flowerId, quantity, callback) => {
  db.query(
    "INSERT INTO cart (userId, flowerId, quantity) VALUES (?, ?, ?)", 
    [userId, flowerId, quantity], 
    (err, result) => {
      if (err) {
        console.error("Error adding to cart:", err);
        return callback(err, null);
      }
      callback(null, result);
    }
  );
};

const updateCartItem = (id, quantity, callback) => {
  db.query("UPDATE cart SET quantity = ? WHERE id = ?", [quantity, id], (err, result) => {
    if (err) {
      console.error("Error updating cart:", err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

const deleteCartItem = (id, callback) => {
  db.query("DELETE FROM cart WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error deleting cart item:", err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

module.exports = { getCart, addToCart, updateCartItem, deleteCartItem };
