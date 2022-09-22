import React, { useState } from "react";
import "../../styles/Login.css";
import { useNavigate } from "react-router-dom";
import {  Row, Col, Form, Button } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
function LoginSignIn(props) {
  const navigate = useNavigate();
  const [isPassword, setIsPassword] = useState(true);

  return (
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
              <Form.Group className="mb-3">
                <Form.Label className="py-2 text-start">نام کاربری</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="example@port.com"
                  name="username"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="py-2 text-start">کلمه عبور</Form.Label>
                <Form.Group className="d-flex flex-row">
                  <Form.Control
                    type={isPassword ? "password" : "text"}
                    placeholder="*******"
                    name="password"
                    required
                  />
                  <div
                    role="button"
                    onClick={() => {
                      setIsPassword(!isPassword);
                    }}
                  >
                    <i className="px-2 fs-4 text-danger">{<BsFillEyeFill />}</i>
                  </div>
                </Form.Group>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="مرا به خاطر بسپار" />
              </Form.Group>
              <Button
                variant="outline-warning"
                type="submit"
                onClick={() => {
                  navigate("/Panel");
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
  );
}

export default LoginSignIn;
