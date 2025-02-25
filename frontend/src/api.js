import axios from "axios";

const API = axios.create({
  baseURL: "/api", // ✅ ใช้ proxy จาก package.json
  headers: { "Content-Type": "application/json" },
});

export default API;
