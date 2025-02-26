import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import API from "../api"; // ✅ ใช้ API Utility

const Flowers = ({ token }) => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);  // เพิ่มสถานะสำหรับการโหลด
  const [error, setError] = useState(null);  // เพิ่มสถานะสำหรับการจัดการข้อผิดพลาด

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const res = await API.get("/flowers"); // ดึงข้อมูลสินค้า
        console.log(res.data);  // ตรวจสอบข้อมูลที่ได้รับจาก API
        setFlowers(res.data);
        setLoading(false);  // การโหลดเสร็จสมบูรณ์
      } catch (err) {
        console.error("Error fetching flowers:", err);
        setError("Failed to load products.");
        setLoading(false);  // เมื่อเกิดข้อผิดพลาด
      }
    };
    fetchFlowers();
  }, []); // ใช้ useEffect เพื่อดึงข้อมูลแค่ครั้งเดียว

  const addToCart = async (flowerId) => {
    if (!token) {
      alert("Please log in first!");
      return;
    }
    try {
      // ใช้ API สำหรับเพิ่มสินค้าลงในตะกร้า
      await API.post(
        "/cart",  // ใช้ API สำหรับเพิ่มสินค้าลงในตะกร้า
        { flowerId, quantity: 1 },  // ส่งข้อมูลไปที่ backend
        { headers: { Authorization: `Bearer ${token}` } }  // ส่ง Token ใน header
      );
      alert("Added to cart!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add to cart.");
    }
  };

  return (
    <div className="d-flex justify-content-center mt-3" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "15px" }}>
      <div className="container">
        <h2 className="text-center mb-4">All Flowers</h2>
        
        {/* Product Section */}
        <div className="row text-center mt-5 mb-5">
          {loading && <p>Loading products...</p>} {/* แสดงข้อความขณะโหลดข้อมูล */}
          {error && <p className="text-danger">{error}</p>} {/* แสดงข้อความหากเกิดข้อผิดพลาด */}

          {flowers.length === 0 && !loading && !error ? (
            <p>No products found.</p>  // แสดงข้อความถ้าไม่มีสินค้าที่โหลด
          ) : (
            flowers.map((flower) => (
              <div className="col-md-4 mb-4" key={flower.id}>
                <div className="image-container">
                  <img
                    src={flower.imageUrl}
                    className="img-fluid"
                    alt={flower.name}
                    style={{ height: "200px", width: "100%", objectFit: "contain", backgroundColor: "#f8f9fa" }}
                  />
                </div>
                <h5 className="mt-2">{flower.name}</h5>
                <p>{flower.price} Baht</p>
                <button className="btn btn-primary" onClick={() => addToCart(flower.id)}>
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Flowers;
