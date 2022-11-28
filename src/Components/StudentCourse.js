import { map, range } from "lodash";
import React, { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Input,
  Row,
  Table,
} from "reactstrap";
import {
  allStudentCourseViewApi,
  deleteStudentCourseApi,
} from "../Store/student/useApi";
import Layout from "./Layout";

function Studentcourse() {
  const dispatch = useDispatch();
  const { studentCourseDetails } = useSelector((state) => ({
    studentCourseDetails: state.StudentsReducer.studentCourseDetails,
  }));
  console.log(studentCourseDetails);

  console.log(studentCourseDetails);
  const [pages, setPages] = useState(1);
  const totalPages = Math.ceil(studentCourseDetails?.count / 10);

  const pageArray = range(1, totalPages + 1);

  useEffect(() => {
    dispatch(allStudentCourseViewApi(pages));
  }, [dispatch, pages]);

  const HandleDelete = (id) => {
    dispatch(deleteStudentCourseApi(id));
  };
  return (
    <div style={{ backgroundColor: "#F8F8FB" }}>
      <Layout>
        <Container>
          <Row>
            <Col md="8">
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
                STUDENTS course
              </h5>
              <Card>
                <Container className="mt-4">
                  <div
                    className="d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <h5
                      style={{
                        color: "#495057",
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      STUDENTS course
                    </h5>
                    <Link
                      to={"/createstudentcourse"}
                      className="mt-0 mx-4 btn btn-success"
                      style={{ backgroundColor: "#34C38F", border: "none" }}
                    >
                      <span className="me-3"> + </span>Create New Course
                    </Link>
                  </div>
                  <Table className="p-5">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Course Name</th>
                        <th>Progress</th>
                        <th>Update Progress</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {map(studentCourseDetails.results, (item) => (
                        <tr>
                          <td scope="row">{item.student_name}</td>
                          <td>{item.course_name}</td>
                          <td>{item.progress}</td>
                          <td>
                            <Input type="select" className="w-50"></Input>
                          </td>
                          <td>
                            <div
                              style={{ alignItems: "center" }}
                              className="d-flex"
                            >
                              <Badge className="badge-soft">View Details</Badge>
                              <Button
                                className="btn btn-danger btn-sm m-0 mx-2 pt-0"
                                style={{ height: "20px" }}
                                onClick={() => {
                                  HandleDelete(item.id);
                                }}
                              >
                                delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Row className="m-3">
                    <Col
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <BiLeftArrow
                        onClick={() => {
                          setPages(pages - 1);
                        }}
                      />
                    </Col>

                    {map(pageArray, (page) => (
                      <Col
                        onClick={() => setPages(page)}
                        className={pages === page && "active"}
                        style={{
                          display: "flex",
                          alignContent: "center",
                          justifyContent: "center",
                        }}
                      >
                        {page}
                      </Col>
                    ))}

                    <Col
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <BiRightArrow
                        onClick={() => {
                          setPages(pages + 1);
                        }}
                      />
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default Studentcourse;
