import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // ใช้ useNavigate แทน useHistory
import API from "../api"; 

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ใช้ navigate แทน history

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.login(username, password);
      setMessage("Login successful");
      localStorage.setItem("token", res.data.token); // เก็บ token ลงใน localStorage
      setToken(res.data.token); // ส่ง token ไปยัง App
      navigate("/"); // เปลี่ยนจาก history.push เป็น navigate
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      {message && <p>{message}</p>}

      {/* ข้อความแนะนำสำหรับสมัครสมาชิก */}
      <div className="mt-3">
        <p>
          ยังไม่มีบัญชี? <a href="/register">สมัครสมาชิกได้ที่นี่</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
