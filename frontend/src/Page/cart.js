import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import API from "../api"; // เรียกใช้ axios ที่เราเตรียมไว้

function Cart({ token }) {
  const [cartItems, setCartItems] = useState([]);

  // ดึงข้อมูลตะกร้าจาก API
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await API.get("/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCartItems(response.data);
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };

    if (token) {
      fetchCart();
    }
  }, [token]);

  // เพิ่มจำนวนสินค้าในตะกร้า
  const increaseQuantity = async (id, quantity) => {
    const newQuantity = quantity + 1;
    try {
      await API.put(
        `/cart/${id}`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
    } catch (err) {
      console.error("Error updating cart item quantity:", err);
    }
  };

  // ลดจำนวนสินค้าในตะกร้า
  const decreaseQuantity = async (id, quantity) => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      try {
        await API.put(
          `/cart/${id}`,
          { quantity: newQuantity },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
      } catch (err) {
        console.error("Error updating cart item quantity:", err);
      }
    }
  };

  // ลบสินค้าออกจากตะกร้า
  const removeFromCart = async (id) => {
    try {
      await API.delete(`/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Error removing item from cart:", err);
    }
  };

  return (
    <div className="card mt-3 shadow p-3 mb-5 bg-body rounded">
      <Container className="p-4">
        <h2 className="text-uppercase fw-bold text-purple">Cart</h2>

        {/* รายการสินค้า */}
        {cartItems.length === 0 ? <p>Your cart is empty</p> : null}
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item border rounded p-3 d-flex align-items-center justify-content-between">
            {/* รูปภาพสินค้า */}
            <div className="d-flex align-items-center">
              <img src={`http://localhost:5000${item.imageUrl}`} alt="Product" className="cart-img me-3" />
              <span className="fw-bold text-purple">{item.name}</span>
            </div>

            {/* ปุ่มเพิ่ม/ลดจำนวน */}
            <div className="d-flex align-items-center">
              <Button
                variant="dark"
                className="btn-sm me-2"
                onClick={() => increaseQuantity(item.id, item.quantity)}
                style={{ backgroundColor: "#7D4BB1", borderColor: "#7D4BB1" }}
              >
                +
              </Button>
              <span className="quantity-box">{item.quantity}</span>
              <Button
                variant="light"
                className="btn-sm ms-2"
                onClick={() => decreaseQuantity(item.id, item.quantity)}
              >
                -
              </Button>
            </div>

            {/* ปุ่มลบสินค้า */}
            <Button
              variant="light"
              className="btn-sm text-purple border"
              style={{ backgroundColor: "#D1B3FF", borderColor: "#D1B3FF" }}
              onClick={() => removeFromCart(item.id)}
            >
              X
            </Button>

            {/* ราคา */}
            <span className="fw-bold text-purple">${item.price * item.quantity}</span>
          </div>
        ))}

        {/* ปุ่มยืนยัน */}
        <div className="text-end mt-3">
          <Button as={Link} to="/pay" variant="light" className="confirm-btn" style={{ backgroundColor: "#D1B3FF", borderColor: "#D1B3FF" }}>
            Confirm
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
