import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",  // URL ของ Backend API
  headers: {
    "Content-Type": "application/json",
  },
});

// ฟังก์ชันสำหรับดึงข้อมูลสินค้าจาก API
API.getFlowers = () => API.get("/flowers");

// ฟังก์ชันสำหรับลงทะเบียนผู้ใช้ใหม่
API.register = (username, password) => 
  API.post("/auth/register", { username, password });

// ฟังก์ชัน login ที่ใน API.js
API.login = (username, password) =>
  API.post("/auth/login", { username, password });


// ฟังก์ชันสำหรับการเพิ่มสินค้าในตะกร้า
API.addToCart = (userId, flowerId, quantity) =>
  API.post("/cart", { userId, flowerId, quantity });

export default API;
