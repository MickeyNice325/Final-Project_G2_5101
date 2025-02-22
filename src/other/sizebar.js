import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
import { FaHome, FaShoppingCart, FaSignInAlt, FaSeedling,FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ นำเข้า Link

const Sidebar = () => {
  return (
    <div
      className="shadow bg-white rounded mx-3 mt-3"
      style={{
        width: "180px",
        minHeight: "95vh",
        padding: "10px",
      }}
    >
      {/* หัวข้อ */}
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
        <ListGroup.Item as={Link} to="/cart" action className="d-flex align-items-center">
          <FaShoppingCart className="me-2 text-secondary" /> <strong>Cart</strong>
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/order" action className="d-flex align-items-center">
          <FaBoxOpen className="me-2 text-secondary" /> <strong>Stats Order</strong>
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/login" action className="d-flex align-items-center">
          <FaSignInAlt className="me-2 text-secondary" /> <strong>Login</strong>
        </ListGroup.Item>

      </ListGroup>
    </div>
  );
};

export default Sidebar;
