import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "reactstrap";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Layout from "./Layout";
import { FaPen } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import {
  allCourseCategoryApi,
  deleteCourseCategoryApi,
} from "../Store/courseCategory/useApi";
import { useDispatch, useSelector } from "react-redux";
import { map, range } from "lodash";
import "../App.css";
import { Link } from "react-router-dom";
function CourseCategories() {
  const dispatch = useDispatch();
  const { categoryDetails } = useSelector((state) => ({
    categoryDetails: state.CourseCategoryReducer.categoryDetails,
  }));
  console.log(categoryDetails);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(allCourseCategoryApi(pages));
  }, [dispatch, pages]);

  const totalPages = Math.ceil(categoryDetails?.count / 10);

  const pageArray = range(1, totalPages + 1);
  const HandleDeleteCategory = (id) => {
    dispatch(deleteCourseCategoryApi(id));
  };
  // console.log(totalPages);

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
            COURSE CATEGORIES
          </h5>
          <Row>
            <Col md="12">
              <Card>
                <Container className="p-4 pb-2">
                  <Table className="m-2">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Course Category Name</th>
                        <th>Duration</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {map(categoryDetails.results, (item) => (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.course_category_name}</td>
                          <td>{item.designation}</td>
                          <td>
                            <div className="d-flex">
                              <Link to={`/updatecoursecategory/${item?.id}`}>
                                <FaPen
                                  className="mx-1"
                                  style={{ color: "#50A5F1" }}
                                />
                              </Link>
                              <ImCross
                                className="mx-1"
                                onClick={() => {
                                  HandleDeleteCategory(item.id);
                                }}
                                style={{ color: "#F46A6A" }}
                              />
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

export default CourseCategories;
