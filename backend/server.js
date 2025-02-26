require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// ตรวจสอบและสร้างโฟลเดอร์ uploads หากไม่มี
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// เส้นทางหน้าแรก
app.get("/", (req, res) => {
  res.send("🚀 Backend API is running...");
});

// เชื่อมโยงเส้นทางต่างๆ ของ API
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const flowerRoutes = require("./routes/flowers");
app.use("/api/flowers", flowerRoutes);

const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

// เส้นทางอัปโหลดไฟล์
const uploadRoutes = require("./routes/uploads");
app.use("/uploads", express.static("uploads")); // ให้โฟลเดอร์ uploads ถูกเข้าถึงได้
app.use("/api/uploads", uploadRoutes);

// กำหนดพอร์ตในการใช้งาน
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
