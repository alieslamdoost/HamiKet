import React, { useState, useEffect } from "react";
import { getData, paginationData, searchData, editData } from "../../api/api";
import {
  Table,
  Button,
  Modal,
  Form,
  Pagination,
  Col,
  Row,
} from "react-bootstrap";


export default function PanelManagment() {
  const [user, setUser] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [show, setShow] = useState(false);
  const [searchUser, setSearchUser] = useState([]);
  const [data, setData] = useState([]);
  const [updated, setUpdated] = useState(false);

  const [modalData, setModalData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    jobPosition: "",
    gender: "",
  });

  let idData = modalData.id;

  /// get Data
  useEffect(() => {
    paginationData("usersData", pageNumber, 10)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log("err");
      });
    getData()
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.log(err));
  }, [updated]);

  ///pagination data

  let totalPage = data.length;

  const forward = () => {
    pageNumber < totalPage && setPageNumber(pageNumber + 1);
    setUpdated(!updated);
  };

  const back = () => {
    pageNumber > 1 && setPageNumber(pageNumber - 1);
    setUpdated(!updated);
  };

  /// Modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /// serach data
  const handleSearch = async (e) => {
    e.preventDefault();
    return searchData("usersData", searchUser)
      .then((res) => {
        setUser(res);
        setSearchUser("");
      })
      .catch((err) => console.log(err));
  };
  const handleReset = () => {
    paginationData("usersData", pageNumber, 10).then((res) => {
      setUser(res);
    });
  };

  /// edit data

  const handleEdit = (id, firstName, lastName, jobPosition, gender) => {
    setModalData({
      id: id,
      firstName: firstName,
      lastName: lastName,
      jobPosition: jobPosition,
      gender: gender,
    });
  };

  const saveEdit = () => {
    editData("usersData", idData, modalData);
    setUpdated(!updated);
  };

  return (
    <>
      <Form onSubmit={handleSearch} className="m-4">
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="جستجو ..."
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
            />
          </Col>
          <Col>
            <Button
              type="submit"
              variant="outline-warning"
              id="button-addon1"
              className="mx-4 px-5 rounded"
            >
              جستجو
            </Button>
            <Button
              variant="outline-warning"
              id="button-addon1"
              className="mx-4 px-5 rounded"
              onClick={() => handleReset()}
            >
              از نو
            </Button>
          </Col>
        </Row>
      </Form>

      <Table striped className="text-center">
        <thead>
          <tr>
            <th>row</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job Position</th>
            <th>Gender</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 &&
            user.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.jobPosition}</td>
                  <td>{item.gender}</td>
                  <td
                    onClick={() =>
                      handleEdit(
                        item.id,
                        item.firstName,
                        item.lastName,
                        item.jobPosition,
                        item.gender
                      )
                    }
                  >
                    <Button variant="warning" onClick={handleShow}>
                      تغییرات
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>تغییرات</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={saveEdit}>
              <Form.Group className="mb-3">
                <Form.Label>نام</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ali"
                  value={modalData.firstName}
                  onChange={(e) =>
                    setModalData({ ...modalData, firstName: e.target.value })
                  }
                  autoFocus
                />
                <Form.Label>نام خانوادگی</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="EslamDoost"
                  value={modalData.lastName}
                  onChange={(e) =>
                    setModalData({ ...modalData, lastName: e.target.value })
                  }
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>شغل</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Developer"
                  value={modalData.jobPosition}
                  onChange={(e) =>
                    setModalData({ ...modalData, jobPosition: e.target.value })
                  }
                  autoFocus
                />
                <Form.Label>جنسیت</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="men"
                  value={modalData.gender}
                  onChange={(e) =>
                    setModalData({ ...modalData, gender: e.target.value })
                  }
                  autoFocus
                />
              </Form.Group>
              <Button variant="danger" onClick={handleClose} className="mx-3">
                بستن
              </Button>
              <Button variant="success" type="submit" className="mx-3">
                ذخیره
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Table>
      <Pagination className="d-flex justify-content-center align-items-center ltr">
        <Pagination.Prev
          onClick={() => forward()}
          disabled={pageNumber >= totalPage ? true : false}
        />
        <Pagination.Item>{pageNumber}</Pagination.Item>
        <Pagination.Next
          onClick={() => back()}
          disabled={pageNumber <= 1 ? true : false}
        />
      </Pagination>
    </>
  );
}
