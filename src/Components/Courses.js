import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "reactstrap";
import Layout from "./Layout";
import { FaPen } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allCourseApi, deleteCourseApi } from "../Store/course/useApi";
import { map, range } from "lodash";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
function Courses() {
  const dispatch = useDispatch();
  const { courseDetails } = useSelector((state) => ({
    courseDetails: state.CourseReducer.courseDetails,
  }));
  console.log(courseDetails);
  const [pages, setPages] = useState(1);
  useEffect(() => {
    dispatch(allCourseApi(pages));
  }, [dispatch, pages]);

  const totalPages = Math.ceil(courseDetails?.count / 10);
  const pageArray = range(1, totalPages + 1);
  const handleDelete = (id) => {
    dispatch(deleteCourseApi(id));
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
            course
          </h5>
          <Row>
            <Col md="6">
              <Card>
                <Container className="p-4 pb-2">
                  <Table className="m-2">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Course Category</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {map(courseDetails?.results, (item) => (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.course_name}</td>
                          <td>{item.duration}</td>
                          <td>{item.course_category}</td>
                          <td>
                            <div className="d-flex">
                              <Link to={`/updatecourse/${item?.id}`}>
                                <FaPen
                                  // onClick={{`/studentview/${item?.id}`}
                                  className="mx-1"
                                  style={{ color: "#50A5F1" }}
                                />
                              </Link>
                              <Link>
                                <ImCross
                                  onClick={() => {
                                    handleDelete(item.id);
                                  }}
                                  className="mx-1"
                                  style={{ color: "#F46A6A" }}
                                />
                              </Link>
                              
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Row>
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

export default Courses;
