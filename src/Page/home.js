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

        {/* Member Section */}
        <h4 className="text-center mt-5">สมาชิก</h4>
        <div className="row text-center">
          {[
            { name: "นัน 04", img: "https://www.lannapoly.ac.th/online/Stu_picture/66309010011.jpg" },
            { name: "นัท 05", img: "https://www.lannapoly.ac.th/online/Stu_picture/66309010012.jpg" },
            { name: "ดัง 16", img: "https://www.lannapoly.ac.th/online/Stu_picture/66309010024.jpg" },
            { name: "มิกซ์ 26", img: "https://www.lannapoly.ac.th/online/Stu_picture/66309010040.jpg" },
            { name: "ริว 35", img: "https://www.lannapoly.ac.th/online/Stu_picture/66309010040.jpg" }
          ].map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="d-flex flex-column align-items-center">
                <img 
                  src={member.img} 
                  className="img-fluid rounded" 
                  alt={member.name} 
                  style={{ width: "150px", height: "150px", objectFit: "contain", backgroundColor: "#f8f9fa" }} 
                />
                <p className="mt-2 fw-bold" style={{ color: "#8666c6" }}>{member.name}</p>
                <p className="text-muted">ชื่อ - นามสกุล</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
