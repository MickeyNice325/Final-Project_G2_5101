import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function OrderTimeline() {
  return (
    <div className="d-flex justify-content-center mt-3" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "15px" ,height: "900px"}}>
    <Container className="mt-4">
      {/* Header */}
      <Row>
        <Col>
          <h3 className="fw-bold">Your Orders time line</h3>
        </Col>
        <Col>
          <h3 className="fw-bold">Your Orders name</h3>
        </Col>
      </Row>

      <Row>
        {/* Timeline */}
        <Col md={6}>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">02-02-2025 11:10</div>
              <div className="timeline-content completed">
                <FaCheckCircle className="icon" /> Orders is Completed
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">01-02-2025 09:12</div>
              <div className="timeline-content">
                <FaEllipsisV className="icon" /> the Orders is blah blah blah
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">01-02-2025 05:00</div>
              <div className="timeline-content">
                <FaEllipsisV className="icon" /> the Orders is blah blah blah
              </div>
            </div>
          </div>
        </Col>

        {/* Order Details */}
        <Col md={6}>
          <Card className="p-3">
            <Row>
              <Col md={4}>
              <img 
                  src="https://e7.pngegg.com/pngimages/273/619/png-clipart-purple-and-green-plants-vs-zombie-carnivorous-plant-illustration-plants-vs-zombies-2-it-s-about-time-plants-vs-zombies-garden-warfare-2-plants-vs-zombies-heroes-plants-vs-thumbnail.png" 
                  className="img-fluid" 
                  alt="Flower 1" 
                  style={{ height: "200px", width: "100%", objectFit: "contain", backgroundColor: "#f8f9fa" }} 
                />
              </Col>
              <Col md={8}>
                <h5 className="text-purple fw-bold">Name flowers</h5>
                <p className="text-muted">intels</p>
                <p className="text-purple fw-bold">price</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default OrderTimeline;
