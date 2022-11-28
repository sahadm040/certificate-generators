import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../App.css";
import Layout from "./Layout";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { profileApi } from "../Store/Login/useApi";
function DashBoard() {

  const dispatch = useDispatch();
  const {loginDetails,loading}= useSelector ((state)=>({
    loginDetails: state.LoginReducer.loginDetails,
    loading: state.LoginReducer.loading
  }))

  useEffect(() => {
    dispatch(profileApi())
  }, [dispatch])

  
  return (
    <div style={{ backgroundColor: "#F8F8FB" }}>
      <Layout>
        <div className="w-100">
          <Container>
            <h5 className="dash-heading" style={{ marginTop: "20px" }}>
              DASHBOARD
            </h5>
            <Row>
              <Col md="4">
                <Card
                  className=" mb-2 card-one shadow"
                  style={{ minHeight: "308px" }}
                >
                  <div className="card-one-top d-flex">
                    <div>
                      <h1 className="card-h1-1 m-2">Welcome Back !</h1>
                      <h1 className="card-h1-2 m-2">
                        It will seem like simplified
                      </h1>
                    </div>
                    <div>
                      <img
                        style={{ maxHeight: "150px", maxWidth: "150px" }}
                        src={require("./images/dashphoto.png")}
                        className="card-one-img"
                        alt="certificate"
                      ></img>
                    </div>
                  </div>
                  <Row className=" px-2 card-one-bottom d-flex">
                    <Col md="4" className="card-one-bottom-section-1">
                      <div className=" card-one-bottom-section-1-img">
                        <img
                          src={require("../Components/images/user image.png")}
                          alt="certificate"
                        ></img>
                      </div>
                      <div className="mt-5 mx-2">
                        <h5 style={{ fontSize: "15px", fontWeight: "500px" ,color:"red" }}>
                          {loginDetails?.username}
                        </h5>
                        <h5 style={{ fontSize: "13px", fontWeight: "400px", color:"blue" }}>
                          {loginDetails?.email}
                        </h5>
                      </div>
                    </Col>
                    <Col md="4" className="mt-3">
                      <h5 style={{ fontSize: "15px", fontWeight: "500px" }}>
                        125
                      </h5>
                      <h5 style={{ fontSize: "15px", fontWeight: "500px" }}>
                        Projects
                      </h5>
                      <Button
                        className="card-view-button mb-2"
                        style={{ fontSize: "12px", fontWeight: "200" }}
                      >
                        View Profile <AiOutlineArrowRight />
                      </Button>
                    </Col>
                    <Col md="4" className="mt-3">
                      <h5 style={{ fontSize: "15px", fontWeight: "500px" }}>
                        $1245
                      </h5>
                      <h5 style={{ fontSize: "15px", fontWeight: "500px" }}>
                        Revenue
                      </h5>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="8">
                <Row>
                  <Col md="6">
                    <Card
                      className="mb-2 cards-part-2 shadow"
                      style={{ minHeight: "150px" }}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="p-2">
                          <h6>Available Courses</h6>
                          <h6>55</h6>
                        </div>
                        <div>
                          <img
                            src={require("../Components//images/icon.png")}
                            alt="certificate"
                            style={{ marginRight: "40px", marginTop: "40px" }}
                          ></img>
                        </div>
                      </div>
                    </Card>
                    <Card
                      className="mb-2 cards-part-2 shadow"
                      style={{ minHeight: "150px" }}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="p-2">
                          <h6>Total Students </h6>
                          <h6>55</h6>
                        </div>
                        <div>
                          <img
                            src={require("../Components//images/icon2.png")}
                            alt="certificate"
                            style={{ marginRight: "40px", marginTop: "40px" }}
                          ></img>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card
                      className="mb-2 cards-part-2 shadow"
                      style={{ minHeight: "150px" }}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="p-2">
                          <h6>Course Completed Students</h6>
                          <h6>55</h6>
                        </div>
                        <img
                          src={require("../Components//images/icon3.png")}
                          alt="certificate"
                          style={{ marginRight: "40px", marginTop: "40px" }}
                        ></img>
                      </div>
                    </Card>
                    <Card
                      className="mb-2 cards-part-2 shadow"
                      style={{ minHeight: "150px" }}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="p-2">
                          <h6>Total Students</h6>
                          <h6>55</h6>
                        </div>
                        <div>
                          <img
                            src={require("../Components//images/icon2.png")}
                            alt="certificate"
                            style={{ marginRight: "40px", marginTop: "40px" }}
                          ></img>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  );
}
export default DashBoard;
