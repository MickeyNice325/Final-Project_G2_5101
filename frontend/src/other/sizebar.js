import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaHome, FaShoppingCart, FaSignInAlt, FaSeedling, FaBoxOpen, FaSignOutAlt, FaUserShield } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // ดึง jwtDecode เพื่อตรวจสอบ role

const Sidebar = ({ token }) => {
  const navigate = useNavigate();
  let userRole = null;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      userRole = decoded.status; // ดึงสถานะ user หรือ admin จาก token
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/");
    window.location.reload();
  };
  

  return (
    <div className="shadow bg-white rounded p-3" style={{ width: "100%", minHeight: "95vh" }}>
      <div className="text-white text-center p-2 rounded" style={{ backgroundColor: "#7D4BB1", fontWeight: "bold" }}>
        Rosette Garden
      </div>

      <ListGroup variant="flush" className="mt-2">
        <ListGroup.Item as={Link} to="/" action className="d-flex align-items-center">
          <FaHome className="me-2 text-secondary" /> <strong>Home</strong>
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/flowers" action className="d-flex align-items-center">
          <FaSeedling className="me-2 text-secondary" /> <strong>All Flowers</strong>
        </ListGroup.Item>

        {token && (
          <>
            <ListGroup.Item as={Link} to="/cart" action className="d-flex align-items-center">
              <FaShoppingCart className="me-2 text-secondary" /> <strong>Cart</strong>
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/order" action className="d-flex align-items-center">
              <FaBoxOpen className="me-2 text-secondary" /> <strong>Stats Order</strong>
            </ListGroup.Item>

            {/* ✅ เมนู Admin Panel (สำหรับแอดมินเท่านั้น) */}
            {userRole === "admin" && (
              <ListGroup.Item as={Link} to="/admin" action className="d-flex align-items-center">
                <FaUserShield className="me-2 text-danger" /> <strong>Admin Panel</strong>
              </ListGroup.Item>
            )}

            {/* Logout */}
            <ListGroup.Item action className="d-flex align-items-center" onClick={handleLogout}>
              <FaSignOutAlt className="me-2 text-secondary" /> <strong>Logout</strong>
            </ListGroup.Item>
          </>
        )}

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
