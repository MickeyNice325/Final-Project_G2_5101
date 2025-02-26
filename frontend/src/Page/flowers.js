import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import API from "../api"; // ✅ ใช้ API Utility

const Flowers = ({ token }) => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const res = await API.get("/flowers"); // ดึงข้อมูลสินค้า
        setFlowers(res.data);
      } catch (err) {
        console.error("Error fetching flowers:", err);
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
      await API.post(
        "/cart",
        { flowerId, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
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
          {flowers.length === 0 ? <p>Loading products...</p> : null}
          {flowers.map((flower) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flowers;
