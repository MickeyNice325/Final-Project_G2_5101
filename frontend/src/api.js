import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",  // URL ของ Backend API
  headers: {
    "Content-Type": "application/json",
  },
});

API.getFlowers = () => API.get("/flowers");

API.register = (username, password) => 
  API.post("/auth/register", { username, password });

API.login = (username, password) =>
  API.post("/auth/login", { username, password });

// เพิ่ม API สำหรับเพิ่มสินค้า
API.addFlower = (formData) => {
  return API.post("/flowers", formData, {
    headers: {
      "Content-Type": "multipart/form-data",  // ใช้ multipart/form-data เมื่อส่งไฟล์
    },
  });
};

API.addToCart = (flowerData) => API.post("/cart", flowerData); // เพิ่ม API สำหรับตะกร้า

export default API;
