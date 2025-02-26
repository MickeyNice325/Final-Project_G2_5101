import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // ใช้ useNavigate แทน useHistory
import API from "../api"; 

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ใช้ navigate แทน history

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await API.register(username, password);
      setMessage(res.data.message);
      navigate("/login"); // เปลี่ยนจาก history.push เป็น navigate
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
