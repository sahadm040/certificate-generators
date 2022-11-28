import { map } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
import { allCourseApi } from "../Store/course/useApi";
import {
  allStudentViewApi,
  createStudentCourseApi,
} from "../Store/student/useApi";
import Layout from "./Layout";

function CreateStudentCourse() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState();

  const [error, setError] = useState("");

  const { studentDetails } = useSelector((state) => ({
    studentDetails: state.StudentsReducer.studentDetails.results,
  }));
  console.log(studentDetails);
  const { courseDetails } = useSelector((state) => ({
    courseDetails: state.CourseReducer.courseDetails.results,
  }));
  console.log(courseDetails);
  useEffect(() => {
    dispatch(allStudentViewApi());
  }, [dispatch]);

  useEffect(() => {
    dispatch(allCourseApi());
  }, [dispatch]);
  const HandleCreate = (e) => {
    e.preventDefault();
    dispatch(createStudentCourseApi(state, navigate));
  };
  const HandleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const HandleProgress = (e) => {
    e.preventDefault();
    var hashid = parseInt(e.target.value);
    if (0 <= hashid && hashid <= 10) {
      console.log(parseInt(e.target.value));
      console.log(typeof parseInt(e.target.value));
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
      setError("");
    } else {
      setError("*please enter a value between 0 and 10");
      // alert("please");
    }
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
            CREATE SUDENT COURSE
          </h5>
          <Row>
            <Col md="7">
              <Card>
                <Container>
                  <Form onSubmit={HandleCreate}>
                    <h4>CREATE SUDENT COURSE</h4>
                    <Row>
                      <Col md="6">
                        <Label>Student name</Label>
                        <select
                          name="student"
                          class="form-control"
                          id="exampleFormControlSelect1"
                          onChange={HandleChange}
                          type="string"
                        >
                          <option>Select Student Name... </option>
                          {map(studentDetails, (item) => (
                            <option value={item.id}>{item.full_name}</option>
                          ))}
                        </select>
                        <Label>Course name</Label>
                        <select
                          name="course"
                          class="form-control"
                          id="exampleFormControlSelect1"
                          onChange={HandleChange}
                          type="string"
                        >
                          <option>Select a Course Name... </option>
                          {map(courseDetails, (item) => (
                            <option value={item.id}>{item.course_name}</option>
                          ))}
                        </select>

                        <Label>Progress</Label>
                        <Input
                          name="progress"
                          placeholder="example    8/10"
                          onChange={HandleProgress}
                          type="number"
                          required
                          // min={1}
                          // max={10}
                          maxLength={2}
                        ></Input>
                        <p style={{ color: "red" }}>{error}</p>
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
                        <Link
                          style={{ textDecoration: "none", color: "#4C6A61" }}
                          to={"/studentcourse"}
                        >
                          Back
                        </Link>
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
        </Container>
      </Layout>
    </div>
  );
}

export default CreateStudentCourse;
