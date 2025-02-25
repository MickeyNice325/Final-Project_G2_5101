const db = require("../db");

const registerUser = (username, password, callback) => {
  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.query(sql, [username, password], callback);
};

const getUserByUsername = (username, callback) => {
  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [username], callback);
};

module.exports = { registerUser, getUserByUsername };
