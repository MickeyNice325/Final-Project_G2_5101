import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",  // URL ของ Backend API
  headers: {
    "Content-Type": "application/json",
  },
});

// ฟังก์ชันดึงข้อมูลสินค้าทั้งหมด
API.getFlowers = () => API.get("/flowers");

// ฟังก์ชันสำหรับลงทะเบียนผู้ใช้ใหม่
API.register = (username, password) => 
  API.post("/auth/register", { username, password });

// ฟังก์ชันสำหรับล็อกอิน
API.login = (username, password) =>
  API.post("/auth/login", { username, password });

// ฟังก์ชันสำหรับการเพิ่มสินค้าในตะกร้า
API.addToCart = (userId, flowerId, quantity) =>
  API.post("/cart", { userId, flowerId, quantity });

// ฟังก์ชันสำหรับเพิ่มสินค้าใหม่ (รองรับการอัปโหลดไฟล์รูปภาพ)
API.addFlower = (flowerData) => {
  const formData = new FormData();
  formData.append("name", flowerData.name);
  formData.append("price", flowerData.price);
  formData.append("image", flowerData.image);

  return API.post("/flowers", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

API.addFlower = (flowerData) => {
  return API.post("/flowers", flowerData);  
};




// ฟังก์ชันสำหรับการลบสินค้า
API.deleteFlower = (flowerId) => API.delete(`/flowers/${flowerId}`);

export default API;
