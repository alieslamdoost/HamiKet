import React from "react";
import { Col, ListGroup, Navbar, Row } from "react-bootstrap";
import userImage from "../../assets/image/userImage.png";
import { BsFillBellFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Navbar className="bg-light">
      <Col className="d-flex justify-content-start align-items-center">
        <ListGroup className="d-flex flex-column justify-content-center align-items-center">
          <img
            src={userImage}
            alt="userImage"
            width={"25%"}
            className="rounded-circle"
          />
          <span className="fs-5 fw-bold text-warning">علی اسلام دوست</span>
          <span className="fs-6 text-success ">کاربر عمومی</span>
        </ListGroup>
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <ListGroup className=" d-flex flex-row px-4">
          <div className="position-relative">
            <div>
              <i className="px-2 fs-4 text-warning">{<BsFillBellFill />}</i>
            </div>
            <div className="position-absolute top-0 end-0 fs-6 text-danger">
              5
            </div>
          </div>
          <div
            role="button"
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="px-2 fs-4 text-danger">
              {<BsFillArrowLeftSquareFill />}
            </i>
          </div>
        </ListGroup>
      </Col>
    </Navbar>
  );
}
