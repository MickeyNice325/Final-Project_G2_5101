import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const handleInputChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="d-flex justify-content-center mt-3"
      style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "15px" }}
    >
      <Container className="mt-5">
        <h2 className="text-center mb-4">Payment Page</h2>

        {/* 📌 ส่วนกรอกที่อยู่สำหรับจัดส่ง */}
        <h4>Shipping Address</h4>
        <Form>
          <Form.Group>
            <Form.Label>ชื่อ - นามสกุล</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              placeholder=""
              value={shippingInfo.fullName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>ที่อยู่</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder=""
              value={shippingInfo.address}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>เมือง</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="Bangkok"
                  value={shippingInfo.city}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  name="zipCode"
                  placeholder="10110"
                  value={shippingInfo.zipCode}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>

        {/* 📌 เลือกวิธีชำระเงิน */}
        <h4 className="mt-4">Payment Method</h4>
        <Form>
          <Form.Group>
            <Form.Label>เลือกวิธีชำระเงิน</Form.Label>
            <Form.Control as="select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
            </Form.Control>
          </Form.Group>
        </Form>

        {/* 📌 ส่วนของแต่ละวิธีการชำระเงิน */}
        {paymentMethod === "credit" && (
          <div className="mt-4">
            <h5>Enter Credit Card Details</h5>
            <Form>
              <Form.Group>
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" placeholder="1234 5678 9012 3456" />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control type="text" placeholder="MM/YY" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text" placeholder="123" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        )}

        {paymentMethod === "paypal" && (
          <div className="mt-4 text-center">
            <h5>Proceed with PayPal</h5>
            <Button variant="warning">Login to PayPal</Button>
          </div>
        )}

        {paymentMethod === "bank" && (
          <div className="mt-4">
            <h5>Bank Transfer Details</h5>
            <p>Account Name: Your Company</p>
            <p>Bank Name: XYZ Bank</p>
            <p>Account Number: 123-456-789</p>
          </div>
        )}

        {/* 📌 ปุ่ม Complete Payment */}
        <div className="text-center mt-4">
          <Button variant="success" size="lg">Complete Payment</Button>
        </div>
      </Container>
    </div>
  );
}

export default PaymentPage;
