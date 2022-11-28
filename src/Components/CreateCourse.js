import { map } from "lodash";
import React, { useEffect, useState } from "react";
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
import { createCourseApi } from "../Store/course/useApi";
import { allCourseCategoryApi } from "../Store/courseCategory/useApi";
import Layout from "./Layout";
function Createcourse() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState();
  const { categoryDetails } = useSelector((state) => ({
    categoryDetails: state.CourseCategoryReducer.categoryDetails,
  }));
  const HandleCreate = (e) => {
    e.preventDefault();
    dispatch(createCourseApi(state, navigate));
  };
  const HandleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  console.log(categoryDetails);
  useEffect(() => {
    dispatch(allCourseCategoryApi());
  }, [dispatch]);
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
            CREATE COURSE
          </h5>
          <Row>
            <Col md="7">
              <Card>
                <Container>
                  <Form onSubmit={HandleCreate}>
                    <Row>
                      <Col md="6">
                        <Label>Course Name :</Label>
                        <Input
                          name="course_name"
                          style={{ backgroundColor: "#F3F3F3" }}
                          placeholder="Enter a course"
                          onChange={HandleChange}
                        ></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <Label>Duration :</Label>
                        <Input
                          name="duration"
                          style={{ backgroundColor: "#F3F3F3" }}
                          placeholder="Enter a duration"
                          onChange={HandleChange}
                        ></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <Label>Course Category : </Label>
                        <select
                          name="course_category"
                          class="form-control"
                          id="exampleFormControlSelect1"
                          onChange={HandleChange}
                        >
                          <option>Select a Course Category... </option>
                          {map(categoryDetails?.results, (item) => (
                            <option value={item.id}>
                              {item.course_category_name}
                            </option>
                          ))}
                        </select>
                      </Col>

                      <Col md="6">
                        <div
                          className="d-flex justify-content-end mx-4 mb-4"
                          style={{ marginTop: "200px" }}
                        >
                          <Button
                            style={{
                              color: "#4C6A61",
                              backgroundColor: "#F3F3F3",
                              border: "none",
                              width: " 124.61px",
                            }}
                            onClick={() => {navigate("/courses")}}
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
                        </div>
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

export default Createcourse;
