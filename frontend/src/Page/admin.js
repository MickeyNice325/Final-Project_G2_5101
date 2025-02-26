import React, { useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import API from "../api"; // ตรวจสอบให้แน่ใจว่า `API` ถูกต้อง

const Admin = () => {
  const [flowers, setFlowers] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchFlowers();
  }, []);

  const fetchFlowers = async () => {
    try {
      const res = await API.get("/flowers"); // ตรวจสอบให้แน่ใจว่า API นี้ทำงานได้
      setFlowers(res.data);
    } catch (err) {
      console.error("Error fetching flowers:", err);
    }
  };

  const addFlower = async (e) => {
    e.preventDefault();
  
    // Check if image is selected
    if (!image) {
      alert("Please upload an image.");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image); // Ensure we add the image as FormData
  
    try {
      await API.addFlower(formData); // Call API to add flower
      fetchFlowers(); // Refresh flower list
      setName("");
      setPrice("");
      setImage(null); // Clear the form
    } catch (err) {
      console.error("Error adding flower:", err);
    }
  };  

  return (
    <div className="container">
      <h2>Admin Panel</h2>

      {/* ฟอร์มสำหรับเพิ่มสินค้า */}
      <Form onSubmit={addFlower}>
        <Form.Group>
          <Form.Label>Flower Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Add Flower
        </Button>
      </Form>

      {/* ตารางแสดงรายการสินค้า */}
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {flowers.map((flower) => (
            <tr key={flower.id}>
              <td>{flower.name}</td>
              <td>{flower.price}</td>
              <td>
                <img
                  src={`http://localhost:5000/uploads/${flower.imageUrl}`}
                  alt={flower.name}
                  style={{ width: "50px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
 