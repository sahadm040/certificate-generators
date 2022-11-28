import { map, range } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";
import { allStudentViewApi } from "../Store/student/useApi";
import Layout from "./Layout";
import "../App.css";

function Students() {
  const dispatch = useDispatch();
  const { studentDetails } = useSelector((state) => ({
    studentDetails: state.StudentsReducer.studentDetails,
  }));

  const tableData = studentDetails?.results;

  // console.log(studentDetails);
  // console.log(studentDetails?.results?.[7] );

  const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(allStudentViewApi(pages));
  }, [dispatch, pages]);

  console.log(studentDetails);

  const totalPages = Math.ceil(studentDetails?.count / 10);

  const pageArray = range(1, totalPages + 1);

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
            STUDENTS
          </h5>
          <Card className="p-3">
            <Row>
              <Col md="3">
                <input
                  className="mb-5"
                  placeholder="search..."
                  style={{ borderRadius: "20px", border: " 1px solid #CED4DA" }}
                ></input>
              </Col>
            </Row>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Joining Date</th>
                  <th>end date</th>
                  <th>Designation</th>
                  <th>Photo</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {map(tableData, (item, key) => (
                  <tr key={item.id}>
                    <th scope="row">{key + 1}</th>
                    <td>{item?.full_name}</td>
                    <td>{item?.phone}</td>
                    <td>{item?.email}</td>
                    <td>{item?.start_date}</td>
                    <td>{item?.end_date}</td>
                    <td>{item?.designation}</td>
                    <td>
                      <img
                        alt=""
                        src={require("./images/dashphoto.png")}
                        height={50}
                        width={50}
                      />
                    </td>
                    <td>
                      {/* <Link to={`/studentview`}> */}
                      <Link to={`/studentview/${item?.id}`}>
                        <Button>View</Button>
                      </Link>
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
          </Card>
        </Container>
      </Layout>
    </div>
  );
}

export default Students;
