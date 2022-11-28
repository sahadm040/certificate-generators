import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
import { singleCourseApi, updateCourseApi } from "../Store/course/useApi";
import Layout from "./Layout";

function Updatecourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { singleCourse } = useSelector((state) => ({
    singleCourse: state.CourseReducer.courseDetails,
  }));

  console.log(singleCourse);
  const [state, setState] = useState();
  useEffect(() => {
    dispatch(singleCourseApi(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    setState(singleCourse);
  }, [singleCourse]);

  const HandleChange = (e) => {
    e.preventDefault()
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const HandleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateCourseApi(params.id, state, navigate));
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
            UPDATE COURSE
          </h5>
          <Row>
            <Col md="7">
              <Card>
                <Container>
                  <Form onSubmit={HandleUpdate}>
                    <Row>
                      <Col md="6">
                        <Label>Course Name :</Label>
                        <Input
                          name="course_name"
                          value={state?.course_name}
                          onChange={HandleChange}
                          style={{ backgroundColor: "#F3F3F3" }}
                          placeholder="React js"
                        ></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <Label>Duration :</Label>
                        <Input
                          name="duration"
                          value={state?.duration}
                          onChange={HandleChange}
                          style={{ backgroundColor: "#F3F3F3" }}
                          placeholder="3 month"
                        ></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <Label>Course Category :</Label>
                        <Input
                        name="course_category"
                        value={state?.course_category}>
                        </Input>
                        {/* <select
                          name="course_category"
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option
                          name="course_category"
                          value={state?.course_category}

                          ></option> */}
                          {/* <option>Select a Course Category... </option>
                          {map(singleCourse?.results, (item) => (
                            <option value={item.id}>
                              {item.course_category_name}
                            </option>
                          ))} */}
                        {/* </select> */}
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
                            onClick={() => {
                              navigate("/courses");
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
                            Update
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

export default Updatecourse;
