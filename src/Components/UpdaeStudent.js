import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Container, Input, Label, Row, Button } from "reactstrap";
import { singleViewApi, updateStudentApi } from "../Store/student/useApi";
import Layout from "./Layout";
function UpdaeStudent() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { studentDetails } = useSelector((state) => ({
    studentDetails: state.StudentsReducer.student,
  }));
  const catId = params?.id;

  const [state, setState] = useState();

  useEffect(() => {
    dispatch(singleViewApi(catId));
  }, [dispatch]);

  useEffect(() => {
    setState(studentDetails);
  }, [studentDetails]);

  const HandleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const HandleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateStudentApi(catId, state, navigate));
  };

  console.log(state);
  return (
    <div style={{ backgroundColor: "#F8F8FB" }}>
      <Layout>
        <Container>
          <div style={{ backgroundColor: "#F8F8FB" }}>
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
              UPDATE STUDENT
            </h5>
            <Card>
              <Container>
                <Form onSubmit={HandleUpdate}>
                  <Row className="p-2 m-2">
                    <Col md="6">
                      <Label>Full Name :</Label>
                      <Input
                        placeholder="Fasil Paloli"
                        name="full_name"
                        value={state?.full_name}
                        onChange={HandleChange}
                        style={{ backgroundColor: "#F3F3F3" }}
                      ></Input>
                    </Col>
                    <Col md="6">
                      <Label>Designation :</Label>
                      <Input
                        placeholder="Lorem ipsum"
                        name="designation"
                        value={state?.designation}
                        onChange={HandleChange}
                        style={{ backgroundColor: "#F3F3F3" }}
                      ></Input>
                    </Col>
                  </Row>
                  <Row className="p-2 m-2">
                    <Col md="6">
                      <Label>Email :</Label>
                      <Input
                        placeholder="dev.osperb@gmail.com"
                        name="email"
                        value={state?.email}
                        onChange={HandleChange}
                        style={{ backgroundColor: "#F3F3F3" }}
                      ></Input>
                    </Col>
                    <Col md="6">
                      <Label>Joining Date :</Label>
                      <Input
                        type="date"
                        placeholder="09 Jun, 2021"
                        name="start_date"
                        value={state?.start_date}
                        onChange={HandleChange}
                        style={{ backgroundColor: "#F3F3F3" }}
                      ></Input>
                    </Col>
                  </Row>
                  <Row className="p-2 m-2">
                    <Col md="6">
                      <Label>Date of Birth :</Label>
                      <Input
                        type="date"
                        name="dob"
                        value={state?.dob}
                        onChange={HandleChange}
                        placeholder="09 Jun, 2021"
                        style={{ backgroundColor: "#F3F3F3" }}
                      ></Input>
                    </Col>
                    <Col md="6">
                      <Label>Date of Leaving :</Label>
                      <Input
                        type="date"
                        name="end_date"
                        value={state?.end_date}
                        onChange={HandleChange}
                        placeholder="09 Jun, 2021"
                        style={{ backgroundColor: "#F3F3F3" }}
                      ></Input>
                    </Col>
                  </Row>
                  <Row className="p-2 m-2">
                    <Col md="6">
                      <Label>Address :</Label>
                      <Input
                        placeholder="Malappuram"
                        name="address"
                        value={state?.address}
                        onChange={HandleChange}
                        style={{ backgroundColor: "#F3F3F3" }}
                      ></Input>
                    </Col>
                    <Col md="6">
                      <Label>Phone number :</Label>
                      <Input
                        type="number"
                        name="phone"
                        value={state?.phone}
                        onChange={HandleChange}
                        placeholder="+91 1234567890"
                        style={{ backgroundColor: "#F3F3F3" }}
                      ></Input>
                    </Col>
                  </Row>
                  <Row className="p-2 m-2">
                    <Col md="3">
                      <Label>Image :</Label>
                      <input
                        placeholder="Enter your Designation"
                        type="file"
                        style={{ backgroundColor: "#F3F3F3" }}
                      ></input>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-end p-3">
                    <Button
                      onClick={() => {
                        navigate(`/studentview/${catId}`);
                      }}
                      className="m-1"
                      style={{
                        backgroundColor: "#F3F3F3",
                        color: "#4C6A61",
                        borderRadius: "9.67391px",
                        width: "124.61px",
                        height: "45.88px",
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="m-1"
                      style={{
                        backgroundColor: "#4C6A61",
                        borderRadius: "9.67391px",
                        width: "124.61px",
                        height: "45.88px",
                      }}
                    >
                      Update
                    </Button>
                  </div>
                </Form>
              </Container>
            </Card>
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export default UpdaeStudent;
