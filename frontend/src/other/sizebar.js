import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaHome, FaShoppingCart, FaSignInAlt, FaSeedling, FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ token }) => {
  console.log("Sidebar is rendered!");  // เพิ่ม log เพื่อตรวจสอบว่า Sidebar ถูก render หรือไม่

  return (
    <div className="shadow bg-white rounded p-3" style={{ width: "100%", minHeight: "95vh" }}>
      <div
        className="text-white text-center p-2 rounded"
        style={{ backgroundColor: "#7D4BB1", fontWeight: "bold" }}
      >
        Rosette Garden
      </div>

      {/* เมนู */}
      <ListGroup variant="flush" className="mt-2">
        <ListGroup.Item as={Link} to="/" action className="d-flex align-items-center">
          <FaHome className="me-2 text-secondary" /> <strong>Home</strong>
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/flowers" action className="d-flex align-items-center">
          <FaSeedling className="me-2 text-secondary" /> <strong>All flower</strong>
        </ListGroup.Item>

        {/* แสดง Cart และ Stats Order ถ้ามี Token */}
        {token && (
          <>
            <ListGroup.Item as={Link} to="/cart" action className="d-flex align-items-center">
              <FaShoppingCart className="me-2 text-secondary" /> <strong>Cart</strong>
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/order" action className="d-flex align-items-center">
              <FaBoxOpen className="me-2 text-secondary" /> <strong>Stats Order</strong>
            </ListGroup.Item>
          </>
        )}

        {/* แสดง Login ถ้าไม่มี Token */}
        {!token && (
          <ListGroup.Item as={Link} to="/login" action className="d-flex align-items-center">
            <FaSignInAlt className="me-2 text-secondary" /> <strong>Login</strong>
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
