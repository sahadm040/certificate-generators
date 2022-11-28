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
import {
  singleCourseCategoryApi,
  updateCourseCategoryApi,
} from "../Store/courseCategory/useApi";
import Layout from "./Layout";

function UpdatecourseCategory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { singleCategory } = useSelector((state) => ({
    singleCategory: state.CourseCategoryReducer.singleCategory,
  }));

  const [state, setState] = useState();

  useEffect(() => {
    dispatch(singleCourseCategoryApi(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    setState(singleCategory);
  }, [singleCategory]);

  const HandleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const HandleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateCourseCategoryApi(params.id, state, navigate));
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
            UPDATE COURSE CATEGORY
          </h5>
          <Row>
            <Col md="8">
              <Card>
                <Container className="p-4">
                  <Form onSubmit={HandleUpdate}>
                    <Row>
                      <Col md="6">
                        <Label>Course Category :</Label>
                        <Input
                          style={{ backgroundColor: "#F3F3F3" }}
                          placeholder="loram ipsum"
                          name="course_category_name"
                          value={state?.course_category_name}
                          onChange={HandleChange}
                        ></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <Label>Designation :</Label>
                        <Input
                          style={{ backgroundColor: "#F3F3F3" }}
                          placeholder="loram ipsum"
                          name="designation"
                          value={state?.designation}
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
                        >
                          Back
                        </Button>
                        <Button
                          className="shadow mx-2"
                          type="submit"
                          style={{
                            color: "white",
                            backgroundColor: "#4C6A61",
                            border: "none",
                            width: " 124.61px",
                          }}
                        >
                          Update
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

export default UpdatecourseCategory;
