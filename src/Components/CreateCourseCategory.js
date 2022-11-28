import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";
import { cousreCategoryApi } from "../Store/courseCategory/useApi";

import Layout from "./Layout";

function CreatecourseCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({});
  const handleCreateCourseCategory = (e) => {
    e.preventDefault();
    dispatch(cousreCategoryApi(state, navigate));
  };
  const HandleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
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
            CREATE COURSE CATEGORY
          </h5>
          <Row>
            <Col md="8">
              <Card>
                <Container className="p-4">
                  <Form onSubmit={handleCreateCourseCategory}>
                    <Row>
                      <Col md="6">
                        <Label>Course Category :</Label>
                        <Input
                          style={{ backgroundColor: "#F3F3F3" }}
                          placeholder="Enter a course Category"
                          name="course_category_name"
                          onChange={HandleChange}
                        ></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <Label>Designation :</Label>
                        <Input
                          style={{ backgroundColor: "#F3F3F3" }}
                          placeholder="Enter a designation"
                          name="designation"
                          onChange={HandleChange}
                        ></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6"></Col>
                      <Col
                        md="6"
                        className="d-flex justify-content-end pb-4 px-5"
                        style={{ marginTop: "200px" }}
                      >
                        <Button
                          style={{
                            color: "#4C6A61",
                            backgroundColor: "#F3F3F3",
                            border: "none",
                            width: " 124.61px",
                          }}
                          onClick={() => {
                            navigate("/coursecategories");
                          }}
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="shadow mx-2"
                          style={{
                            color: "white",
                            backgroundColor: "#4C6A61",
                            border: "none",
                            width: " 124.61px",
                          }}
                        >
                          Create
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Container>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default CreatecourseCategory;
