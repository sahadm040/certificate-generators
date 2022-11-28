import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "reactstrap";
import { BiMapPin } from "react-icons/bi";
import { RiUserVoiceLine } from "react-icons/ri";

import Layout from "./Layout";
import { BsPhone } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudentApi, singleViewApi } from "../Store/student/useApi";
import { map } from "lodash";

function StudentView() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { studentDetails } = useSelector((state) => ({
    studentDetails: state.StudentsReducer.student,
  }));
  console.log(studentDetails);
  useEffect(() => {
    dispatch(singleViewApi(params.id));
  }, [dispatch,params.id]);
  // console.log(params.id);
  //
  const course = studentDetails?.student_courses;

  const HandleDeleteStudent = () => {
    // console.log(`gfhgf:${studentDetails?.id}`);
    dispatch(deleteStudentApi(studentDetails?.id, navigate));
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
            STUDENT VIEW
          </h5>
          <div>
            <Row>
              <Col md="8">
                <Card className="shadow">
                  <Container>
                    <Row className="m-3">
                      <Col md="6">
                        <div className="m-3">
                          <h5
                            className="m-0 mb-2"
                            style={{
                              color: "#495057",
                              "font-family": "Poppins",
                              "font-style": "normal",
                              "font-size": "19.5px",
                              "line-height": "29px",
                            }}
                          >
                            {studentDetails?.full_name}
                          </h5>
                          <p className="m-0">{studentDetails?.dob}</p>
                          <div className="d-flex">
                            <BiMapPin
                              className="mt-1"
                              style={{ color: "#556EE6" }}
                            />
                            <p className="m-0 mx-2 mb-2">
                              {studentDetails?.address}
                            </p>
                          </div>
                          <div className="d-flex">
                            <BsPhone
                              className="mt-1"
                              style={{ color: "#556EE6" }}
                            />
                            <p className="m-0 mx-2 mb-2">
                              {studentDetails?.phone}
                            </p>
                          </div>

                          <p className="m-0">
                            <b>Contact Details :</b>
                          </p>
                          <div className="d-flex">
                            <RiUserVoiceLine
                              className="mt-1"
                              style={{ color: "#556EE6" }}
                            />
                            <p className="m-0 mx-2 mb-2">
                              Email : {studentDetails?.email}{" "}
                            </p>
                          </div>
                          <div className="d-flex">
                            <BsPhone
                              className="mt-1"
                              style={{ color: "#556EE6" }}
                            />
                            <p className="m-0 mx-2 mb-2">
                              Mobile : {studentDetails?.phone}{" "}
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col md="6">
                        <Row>
                          <Col
                            md="6"
                            className="mt-3 d-flex align-items-center"
                            style={{ flexDirection: "column" }}
                          >
                            <img
                              src={require("../Components/images/studentview.png")}
                              alt="studentview"
                            ></img>
                            <p>{studentDetails?.designation}</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <div className="d-flex justify-content-end mb-3">
                      <Button
                        style={{
                          backgroundColor: "#4C6A61",
                          width: "101.28px",
                          height: "37.52px",
                          border: "none",
                        }}
                      >
                        <Link
                          to={`/updatestudent/${params.id}`}
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Update
                        </Link>
                      </Button>
                      <Button
                        onClick={HandleDeleteStudent}
                        className="ms-3"
                        style={{
                          backgroundColor: "#E6555E",
                          width: "101.28px",
                          height: "37.52px",
                          border: "none",
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </Container>
                </Card>
              </Col>
            </Row>
            <Row className="mt-5">
              {/* {studentDetails?.student_courses.map((item,key)=>( */}
              {map(course, (item, key) => (
                <Col key={key} md="6">
                  <Card className="shadow m-2">
                    <Container>
                      <div className="d-flex m-4">
                        <div style={{ color: "rgb(76, 106, 97)" }}>
                          <h6>COURSE NAME :</h6>
                          <h6>DURATION :</h6>
                          <h6>PROGRESS :</h6>
                          <h6>COURSE CATEGORY NAME :</h6>
                          <h6>DESIGNATION :</h6>
                        </div>
                        <div
                          className="mx-1"
                          style={{ color: "rgb(230, 85, 94)" }}
                        >
                          <h6>{item.course.course_name}</h6>
                          <h6> {item.course.duration}</h6>
                          <h6>
                            {item.progress ? item.progress : "NO"}
                            {/* {item.course?.course?.progress} */}
                          </h6>
                          <h6>
                            {item.course.course_category.course_category_name}
                          </h6>
                          <h6>{item.course.course_category.designation}</h6>
                        </div>
                      </div>
                    </Container>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row className="m-5 d-flex" style={{ alignItems: "center" }}>
              <Col md={6} className=" mt-2 d-flex" style={{justifyContent:"center"}}>
                <Link
                  to={"/createstudentcourse"}
                  className="mt-0 mx-4 btn btn-success"
                  style={{
                    backgroundColor: "#34C38F",
                    border: "none",
                  }}
                >
                  <span className="me-3"> + </span>Create New Course
                </Link>
              </Col>
              <Col md={6} className="mt-2 d-flex"  style={{justifyContent:"center"}}>
                <Link
                  to={`/certificate/${params.id}`}
                  className="mt-0 mx-4 btn btn-success"
                  style={{
                    backgroundColor: "#611fd5",
                    border: "none",
                  }}
                >
                  certificate
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export default StudentView;
