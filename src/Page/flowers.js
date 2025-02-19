import React from "react";
import { Container, Row, Col, Form, Button, InputGroup, Carousel } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <Container fluid>
        <div className="card mt-3 shadow p-3 mb-5 bg-body rounded">
      {/* Header */}
      <Row className="align-items-center p-3 border-bottom justify-content-center">
        <Col xs={10} md={6} className="text-center">
            <InputGroup>
            <Form.Control placeholder="ค้นหา..." />
            <Button variant="primary">ค้นหา</Button>
            </InputGroup>
        </Col>
        <Col xs={2} className="text-end">
            <FaShoppingCart size={24} />
        </Col>
    </Row>


      {/* Carousel สไลด์รูปภาพ */}
      <Row className="mt-3">
        <Col>
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
        </Col>
      </Row>

      {/* Grid สินค้า */}
      <Row className="mt-3">

        <Col md={3}>
        <div 
            className="border rounded text-center mb-5 mx-5 p-3 shadow p-3 mb-5 bg-body rounded card-hover"
            style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}
            >
            <img
                src="https://i.pinimg.com/736x/4a/58/75/4a5875d095eaa44484b144b7884a53e7.jpg"
                className="w-100 mb-2"
                alt="Product 1"
                style={{ 
                borderRadius: "10px", 
                maxHeight: "200px",  
                objectFit: "cover"   
                }}
            />
            <p>Sunflower</p>
        </div>
        </Col>

        
      </Row>
      </div>
    </Container>
  );
}

export default Home;
