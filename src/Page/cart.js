import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Cart() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="card mt-3 shadow p-3 mb-5 bg-body rounded">
      <Container className="p-4">
        <h2 className="text-uppercase fw-bold text-purple">Cart</h2>

        {/* รายการสินค้า */}
        <div className="cart-item border rounded p-3 d-flex align-items-center justify-content-between">
          {/* รูปภาพสินค้า */}
          <div className="d-flex align-items-center">
            <img
              src="https://i.pinimg.com/736x/4a/58/75/4a5875d095eaa44484b144b7884a53e7.jpg"
              alt="Product"
              className="cart-img me-3"
            />
            <span className="fw-bold text-purple">Name flowers</span>
          </div>

          {/* ปุ่มเพิ่ม/ลดจำนวน */}
          <div className="d-flex align-items-center">
            <Button variant="dark" className="btn-sm me-2 " onClick={increaseQuantity} style={{ backgroundColor: "#7D4BB1", borderColor: "#7D4BB1" }}>
              +
            </Button>
            <span className="quantity-box">{quantity}</span>
            <Button variant="light" className="btn-sm ms-2" onClick={decreaseQuantity}>
              -
            </Button>
          </div>

          {/* ปุ่มลบสินค้า */}
          <Button variant="light" className="btn-sm text-purple border" style={{ backgroundColor: "#D1B3FF", borderColor: "#D1B3FF" }}>X</Button>

          {/* ราคา */}
          <span className="fw-bold text-purple" >${100 * quantity}</span>
        </div>

        {/* ปุ่มยืนยัน */}
        <div className="text-end mt-3">
        <Button as={Link} to="/pay" variant="light" className="confirm-btn" style={{ backgroundColor: "#D1B3FF", borderColor: "#D1B3FF" }}>
            confirm
        </Button>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
