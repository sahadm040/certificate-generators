// import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, Col, Container, Input, Label, Row, Button } from "reactstrap";
import { studentCreateApi } from "../Store/student/useApi";
import Layout from "./Layout";

function CreateStudent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({});
  console.log(state);

  const HandleCreateStudent = (e) => {
    e.preventDefault();
    dispatch(studentCreateApi(state, navigate));
  };
  return (
    <div style={{ backgroundColor: "#F8F8FB" }}>
      <Layout>
        <Container>
          <h5
            style={{
              color: "#495057",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
              marginTop: "20px",
            }}
          >
            CREATE STUDENT
          </h5>
          <div>
            <Row>
              <Col md="8">
                <Card>
                  <Container>
                    <Form onSubmit={HandleCreateStudent}>
                      <Row className="p-2 m-2">
                        <Col md="6">
                          <Label>Full Name :</Label>
                          <Input
                            placeholder="Enter your full name"
                            style={{ backgroundColor: "#F3F3F3" }}
                            name="full_name"
                            onChange={(e) =>
                              setState({ ...state, full_name: e.target.value })
                            }
                          ></Input>
                        </Col>
                        <Col md="6">
                          <Label>Designation :</Label>
                          <Input
                            placeholder="Enter your Designation"
                            name="designation"
                            onChange={(e) =>
                              setState({
                                ...state,
                                designation: e.target.value,
                              })
                            }
                            style={{ backgroundColor: "#F3F3F3" }}
                          ></Input>
                        </Col>
                      </Row>
                      <Row className="p-2 m-2">
                        <Col md="6">
                          <Label>Email :</Label>
                          <Input
                            placeholder="Enter your Email"
                            name="email"
                            onChange={(e) =>
                              setState({ ...state, email: e.target.value })
                            }
                            style={{ backgroundColor: "#F3F3F3" }}
                          ></Input>
                        </Col>
                        <Col md="6">
                          <Label>Joining Date :</Label>
                          <Input
                            type="date"
                            name="start_date"
                            onChange={(e) =>
                              setState({ ...state, start_date: e.target.value })
                            }
                            placeholder="pic a date"
                            style={{ backgroundColor: "#F3F3F3" }}
                          ></Input>
                        </Col>
                      </Row>
                      <Row className="p-2 m-2">
                        <Col md="6">
                          <Label>Date of Birth :</Label>
                          <Input
                            type="date"
                            name="dob"
                            onChange={(e) =>
                              setState({ ...state, dob: e.target.value })
                            }
                            placeholder="Enter your Date of Birth"
                            style={{ backgroundColor: "#F3F3F3" }}
                          ></Input>
                        </Col>
                        <Col md="6">
                          <Label>Date of Leaving :</Label>
                          <Input
                            type="date"
                            name="end_date"
                            onChange={(e) =>
                              setState({ ...state, end_date: e.target.value })
                            }
                            placeholder="pic a date"
                            style={{ backgroundColor: "#F3F3F3" }}
                          ></Input>
                        </Col>
                      </Row>
                      <Row className="p-2 m-2">
                        <Col md="6">
                          <Label>Address :</Label>
                          <Input
                            placeholder="Enter your Address"
                            name="address"
                            onChange={(e) =>
                              setState({ ...state, address: e.target.value })
                            }
                            style={{ backgroundColor: "#F3F3F3" }}
                          ></Input>
                        </Col>
                        <Col md="6">
                          <Label>Phone number :</Label>
                          <Input
                            type="number"
                            name="phone"
                            onChange={(e) =>
                              setState({ ...state, phone: e.target.value })
                            }
                            placeholder="Enter your Phone number"
                            style={{ backgroundColor: "#F3F3F3" }}
                          ></Input>
                        </Col>
                      </Row>
                      <Row className="p-2 m-2">
                        <Col md="3">
                          <Label>Image :</Label>
                          <input
                            name="img"
                            onChange={(e) =>
                              setState({ ...state, img: e.target.value })
                            }
                            placeholder="Enter your Designation"
                            type="file"
                            style={{ backgroundColor: "#F3F3F3" }}
                          ></input>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-end p-3">
                        <Button
                          className="m-1"
                          style={{
                            backgroundColor: "#F3F3F3",
                            color: "#4C6A61",
                            borderRadius: "9.67391px",
                            width: "124.61px",
                            height: "45.88px",
                          }}
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="shadow m-1"
                          style={{
                            backgroundColor: "#4C6A61",
                            borderRadius: "9.67391px",
                            width: "124.61px",
                            height: "45.88px",
                          }}
                        >
                          Create
                        </Button>
                      </div>
                    </Form>
                  </Container>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export default CreateStudent;
