import React from "react";
import { Container, Row, Col, Form, Button, InputGroup, Carousel } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <Container fluid>
      {/* Header */}
      <Row className="align-items-center p-3 border-bottom">
        <Col xs={8}>
          <InputGroup>
            <Form.Control placeholder="ค้นหา..." />
            <Button variant="primary">ค้นหา</Button>
          </InputGroup>
        </Col>
        <Col xs={4} className="text-end">
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
                src="https://affiliatedir.com/images/products/15/15test.jpg"
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://affiliatedir.com/images/products/15/15test.jpg"
                alt="Slide 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://affiliatedir.com/images/products/15/15test.jpg"
                alt="Slide 3"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Grid สินค้า */}
      <Row className="mt-3">
        <Col md={3}>
          <div className="border rounded p-3 text-center">
            <img
              src="https://affiliatedir.com/images/products/15/15test.jpg" // รูปสินค้า 1
              className="w-100 mb-2"
              alt="Product 1"
            />
            <p>รายละเอียดสินค้า 1</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="border rounded p-3 text-center">
            <img
              src="https://affiliatedir.com/images/products/15/15test.jpg" // รูปสินค้า 2
              className="w-100 mb-2"
              alt="Product 2"
            />
            <p>รายละเอียดสินค้า 2</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="border rounded p-3 text-center">
            <img
              src="https://affiliatedir.com/images/products/15/15test.jpg" // รูปสินค้า 3
              className="w-100 mb-2"
              alt="Product 3"
            />
            <p>รายละเอียดสินค้า 3</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="border rounded p-3 text-center">
            <img
              src="https://affiliatedir.com/images/products/15/15test.jpg" // รูปสินค้า 4
              className="w-100 mb-2"
              alt="Product 4"
            />
            <p>รายละเอียดสินค้า 4</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
