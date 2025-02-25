import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../api"; // ✅ ใช้ API Utility

const Home = ({ token }) => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const res = await API.get("/flowers"); // ✅ ดึงสินค้าจาก Backend
        setFlowers(res.data);
      } catch (err) {
        console.error("Error fetching flowers:", err);
      }
    };
    fetchFlowers();
  }, []);

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
        {/* Carousel Section */}
        <div className="row mt-3">
          <div className="col">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="https://www.flowers2thailand.com/Upload/Home/16-en.jpg" alt="Slide 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://media.glamour.com/photos/63c80ffac2de2bdc84715ceb/16:9/w_2991,h_1682,c_limit/online%20flower%20delivery.png" alt="Slide 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://theflowershopatl.com/cdn/shop/files/atlanta-ga-florist-the-flower-shop-atlanta.jpg?v=1691437663&width=3840" alt="Slide 3" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

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

        {/* Member Section */}
        <h4 className="text-center mt-5">สมาชิก</h4>
        <div className="row text-center">
          {[
            { nickname: "นัน", fname: "นันทิพัทธ์", lname: "สุกันทา", img: "https://www.lannapoly.ac.th/online/Stu_picture/66309010011.jpg" },
            { nickname: "นัท", fname: "ณัฐภัทร", lname: "กลิ่นจันทร์", img: "https://www.lannapoly.ac.th/online/Stu_picture/66309010012.jpg" },
            { nickname: "ดัง", fname: "naruepon", lname: "wangwiang", img: "https://www.lannapoly.ac.th/online/Stu_picture/66309010024.jpg" },
            { nickname: "มิกซ์", fname: "นัทพงษ์", lname: "วงศ์แสง", img: "https://www.lannapoly.ac.th/online/Stu_picture/66309010040.jpg" },
            { nickname: "ริว", fname: "วัชรพงศ์", lname: "ส่งเสริม", img: "https://www.lannapoly.ac.th/online/Stu_picture/66309010040.jpg" }
          ].map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="d-flex flex-column align-items-center">
                <img
                  src={member.img}
                  className="img-fluid rounded"
                  alt={`${member.fname} ${member.lname}`}
                  style={{ width: "150px", height: "150px", objectFit: "contain", backgroundColor: "#f8f9fa" }}
                />
                <p className="mt-2 fw-bold" style={{ color: "#8666c6" }}>ชื่อเล่น: {member.nickname}</p>
                <p className="text-muted">{member.fname} {member.lname}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
