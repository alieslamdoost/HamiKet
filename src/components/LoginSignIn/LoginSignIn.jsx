import React from "react";
import "../../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function LoginSignIn(props) {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <div className="loginsignin">
            <div className="d-flex flex-column justify-content-start align-items-start">
              <div className="d-flex flex-column justify-content-center align-items-center py-5">
                <div className="fs-3 py-2"> خوش آمدید!</div>
                <div className="fs-6 py-2">
                  از اینکه شما را دوباره ملاقات می کنیم خرسندیم
                </div>
              </div>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Row className="mb-3 d-flex flex-column">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="py-2 text-start">
                      نام کاربری
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="example@port.com"
                      name="username"
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="py-2 text-start">
                      کلمه عبور
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="*******"
                      name="password"
                      required
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="مرا به خاطر بسپار" />
                </Form.Group>
                <Button
                  variant="outline-warning"
                  type="submit"
                  onClick={() => {
                    navigate("/ManagementProducts");
                  }}
                >
                  ورود
                </Button>
              </Form>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default LoginSignIn;
