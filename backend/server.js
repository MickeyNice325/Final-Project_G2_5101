require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("🚀 Backend API is running...");
});

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const flowerRoutes = require("./routes/flowers");
app.use("/api/flowers", flowerRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
