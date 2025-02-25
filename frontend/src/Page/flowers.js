import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
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
        </Row>

        {/* Grid สินค้า */}
        <Row className="g-4 justify-content-start">
          <Col xs={6} sm={6} md={4} lg={3}>
            <div className="border rounded text-center p-3 shadow product-card">
              <div className="image-container">
                <img
                  src="https://i.pinimg.com/736x/4a/58/75/4a5875d095eaa44484b144b7884a53e7.jpg"
                  alt="Product"
                  className="product-image"
                />
              </div>
              <div className="mt-2 text-start">
                <p className="fw-bold text-primary">Sunflower</p>
                <p className="text-muted">intels</p>
                <p className="text-primary">price</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Home;
