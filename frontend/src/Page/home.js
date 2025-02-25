import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex justify-content-center mt-3" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "15px" }}>
      <div className="container">
        {/* Carousel Section */}
        <div className="row mt-3">
          <div className="col">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="https://www.flowers2thailand.com/Upload/Home/16-en.jpg"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="https://media.glamour.com/photos/63c80ffac2de2bdc84715ceb/16:9/w_2991,h_1682,c_limit/online%20flower%20delivery.png"
                  alt="Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="https://theflowershopatl.com/cdn/shop/files/atlanta-ga-florist-the-flower-shop-atlanta.jpg?v=1691437663&width=3840"
                  alt="Slide 3"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        {/* Product Section */}
        <div className="row text-center mt-5 mb-5">
          <div className="col-md-4">
            <Link to="/flower1" className="text-decoration-none">
              <div className="image-container">
                <img 
                  src="https://e7.pngegg.com/pngimages/273/619/png-clipart-purple-and-green-plants-vs-zombie-carnivorous-plant-illustration-plants-vs-zombies-2-it-s-about-time-plants-vs-zombies-garden-warfare-2-plants-vs-zombies-heroes-plants-vs-thumbnail.png" 
                  className="img-fluid" 
                  alt="Flower 1" 
                  style={{ height: "200px", width: "100%", objectFit: "contain", backgroundColor: "#f8f9fa" }} 
                />
              </div>
              <h5 className="mt-2">Name Flower</h5>
              <p>100 Baht</p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/flower2" className="text-decoration-none">
              <div className="image-container">
                <img 
                  src="https://w7.pngwing.com/pngs/895/252/png-transparent-plants-vs-zombies-2-it-s-about-time-plants-vs-zombies-garden-warfare-plants-vs-zombies-heroes-peashooter-pea-leaf-video-game-smiley-thumbnail.png" 
                  className="img-fluid" 
                  alt="Flower 2" 
                  style={{ height: "200px", width: "100%", objectFit: "contain", backgroundColor: "#f8f9fa" }} 
                />
              </div>
              <h5 className="mt-2">Name Flower</h5>
              <p>100 Baht</p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/flower3" className="text-decoration-none">
              <div className="image-container">
                <img 
                  src="https://i.pinimg.com/236x/d5/51/0a/d5510a4e437820041660af1e7eeab1dd.jpg" 
                  className="img-fluid" 
                  alt="Flower 3" 
                  style={{ height: "200px", width: "100%", objectFit: "contain", backgroundColor: "#f8f9fa" }} 
                />
              </div>
              <h5 className="mt-2">Name Flower</h5>
              <p>100 Baht</p>
            </Link>
          </div>
        </div>
        <div className="row align-items-center shadow-lg p-4 rounded bg-white">

        {/* รูปภาพ */}
        <div className="col-md-4 text-center">
          <div className="image-container">
            <img
              src="https://i.ytimg.com/vi/uZWZJy8BV_g/maxresdefault.jpg"
              alt="Rose Blue"
              className="img-fluid rounded shadow"
              style={{ height: "200px", width: "100%", objectFit: "contain", backgroundColor: "#f8f9fa" }}
            />
          </div>
        </div>
        {/* รายละเอียดสินค้า */}
        <div className="col-md-8">
          <h3 className="text-primary fw-bold">Sunflower</h3>
          <p className="text-muted">
            <strong>ความหมาย:</strong> Sunflower's design is based on the common sunflower (Helianthus annuus), a crop native to the Americas harvested for their edible oils and seeds. Her ability to produce sun is a pun on the plant she's based on.
Her reload animation in her shooter game appearances where she lifts her face towards the sun is a reference to the urban myth which states that sunflower heads
          </p>
          <Link className="btn btn-primary rounded-pill px-4">
            กดเพื่อสั่งซื้อ
          </Link>
        </div>
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
