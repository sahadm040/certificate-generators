import React, { useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button, Col, Container, Row } from "reactstrap";
import { picwish } from "./images";
import { cerback } from "./images";
import { cdesig } from "./images";
import { edisonvalleylogo } from "./images";
import { osperb } from "./images";
import { Edisonvalleybulb } from "./images";
import { Edisonvalleybulbb } from "./images";
import { Xanthrone } from "./images";
import { eceal } from "./images";
import "../App.css";
import { useParams } from "react-router-dom";
import { singleViewApi } from "../Store/student/useApi";
import { useDispatch, useSelector } from "react-redux";
import { map } from "lodash";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import nasif from "../Components/images/nasif.png";


const Certificate = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const now = 40;
  const { studentDetails } = useSelector((state) => ({
    studentDetails: state.StudentsReducer.student,
  }));
  useEffect(() => {
    dispatch(singleViewApi(params.id));
  }, [dispatch, params.id]);

  const progressArray = studentDetails?.student_courses?.map((item) =>
    parseInt(item?.progress)
  );
  const Total = progressArray?.reduce((x, y) => x + y, 0);
  console.log(Total);
  const length = studentDetails?.student_courses?.length;
  console.log(length, "length");
  const grandtotal = length * 10;
  console.log(grandtotal);
  const rating = (Total / grandtotal) * 100;
  console.log(rating);

  console.log((rating / 10).toFixed(2));
  const ratingvalue = (rating / 10).toFixed(2);
  console.log(ratingvalue);
  const ratingvaluefive = (ratingvalue / 2).toFixed(2);

  console.log(ratingvaluefive);
  const totalStars = 10;
  const ratingtotalStars = 5;
  console.log();
  // const activeStars=3
  const course = studentDetails?.student_courses;
  const Handleprint = (e) => {
    e.preventDefault();
    window.print();
  };
  return (
    <div
      className="certificate-text"
      // style={{ backgroundImage: `url(${Edisonvalleybulb})`, backgroundSize: 'contain', }}
    >
      <div className="m-2">
        <img src={cdesig} width="100%" height="120px " />
      </div>
      {/* <Container> */}
      <div>
        <Container>
          <div
            className="d-flex align-items-center"
            style={{ flexDirection: "column" }}
          >
            <h1
              style={{
                fontSize: "40px",
                lineHeight: "36px",
                fontWeight: "600",
                color: "#383737",
                textAlign: "center",
                marginTop: "100px",
              }}
            >
              CERTIFICATE OF ACHIEVEMENT
            </h1>
            <h3
              style={{
                fontSize: "15px",
                lineHeight: "40px",
                fontWeight: "400",
                color: " #6c5b5b",
                textAlign: "center",
              }}
            >
              Certificate Id : {studentDetails.id}{" "}
            </h3>
            <h3
              className="mt-4"
              style={{
                fontSize: "40px",
                lineHeight: "40px",
                fontWeight: "800",
                color: " #2f74b9",
                textAlign: "center",
                letterSpacing: "2px",
              }}
            >
              {studentDetails?.full_name?.toUpperCase()}
            </h3>
            <h3
              className="my-2"
              style={{
                fontSize: "20px",
                lineHeight: "40px",
                fontWeight: "400",
                color: "#6c5b5b",
                textAlign: "center",
              }}
            >
              has completed the following profession:{" "}
              <span style={{ color: "#8DC049", fontWeight: "600" }}>
                {studentDetails?.designation?.toUpperCase()}
              </span>
            </h3>
            <h5
              className="my-3"
              style={{
                color: "#8DC049",
                fontSize: "25px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              {ratingvaluefive}/5
            </h5>
            <div className="d-flex justify-content-center my-3">
              {[...new Array(ratingtotalStars)].map((arr, index) => {
                return index < Math.floor(ratingvaluefive) ? (
                  <AiFillStar size={50} color={" #2f74b9"} />
                ) : (
                  <AiOutlineStar size={50} color={" #2f74b9"} />
                );
              })}
            </div>

            {/* <div className="w3-border">
                <div className="w3-grey"></div>
              </div> */}

            <h3
              className="thispara my-3"
              style={{
                color: "#6c5b5b",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              This is to certify that{" "}
              <span>
                {" "}
                Mr/Mrs
                {studentDetails.full_name}
              </span>{" "}
              has successfully completed the profession in{" "}
              <span>{studentDetails.designation}</span>
              started on<span>{studentDetails.start_date} </span>
              and completed on {studentDetails.end_date}. We wish you the best
              for your future endeavors.
            </h3>
            <div className="my-3">
              <img src={eceal} />
            </div>
            <div>
              <h3
                className="my-3"
                style={{
                  display: "grid",
                  textAlign: "center",
                  fontSize: "20px",
                  color: "#6c5b5b",
                }}
              >
                Ashik Sharaf koori
                <span>Founder & CEO, edisonvalley</span>
                <span>www.edisonvalley.com</span>
              </h3>
            </div>
          </div>
          <div className="d-flex justify-content-around  align-items-center">
            <img
              style={{ width: "140px", height: "70px" }}
              src={edisonvalleylogo}
            />
            <img style={{ width: "150px", height: "30px" }} src={Xanthrone} />
            <img style={{ width: "120px", height: "30px" }} src={osperb} />
          </div>
          {/* <div className="d-flex">
              <img src={edisonvalleylogo} />
              <img src={Xanthrone} />
              <img src={osperb} />
            </div> */}
          <div
            className="d-flex align-items-center m-4"
            style={{ flexDirection: "column", position: "relative" }}
            // style={{backgroundImage: `url(${Edisonvalleybulb})`, backgroundSize: 'contain', flexDirection: "column" ,backgroundRepeat:"no-repeat" ,position:"relative" }}
            // style={{ backgroundImage: `url(${Edisonvalleybulb})`, backgroundSize: 'contain', }}
          >
            {/* <img src={Edisonvalleybulb} width="800px" height="800px" style={{position:"absolute",opacity:"0.2",top:"200px"}} /> */}
            <img
              src={Edisonvalleybulbb}
              width="800px"
              height="800px"
              style={{ position: "absolute", opacity: "0.1", top: "200px" }}
            />
            <h1
              style={{
                marginTop: "200px",
                fontSize: "40px",
                lineHeight: "40px",
                fontWeight: "800",
                color: " #2f74b9",
                textAlign: "center",
                letterSpacing: "2px",
              }}
            >
              scorebord
            </h1>
            <h4
              style={{
                fontSize: "20px",
                fontWeight: "400",
                color: "#6c5b5b",
                textAlign: "center",
              }}
            >
              (Based on Practices and Assessments)
            </h4>

            <div>
              {map(course, (item, key) => (
                <div className="d-flex justify-content-around m-4">
                  <div style={{ minWidth: "100px", marginRight: "20px" }}>
                    <h1 style={{ color: " #2F74B9", fontSize: "20px" }}>
                      {item.course.course_name}
                    </h1>
                  </div>
                  <div>
                    {[...new Array(totalStars)].map((arr, index) => {
                      return index < item.progress ? (
                        <AiFillStar size={25} color={"8DC049"} />
                      ) : (
                        <AiOutlineStar size={25} color={" #8DC049"} />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            {/* <div>
              {map(course, (item, key) => (
                <div >
                  <Row>
                    <Col key={key} md="6">
                      <h1 >
                        {item.course.course_name}
                      </h1>
                    </Col>
                    <Col md="6">
                      {[...new Array(totalStars)].map((arr, index) => {
                        return index < item.progress ? (
                          <AiFillStar size={25} color={"8DC049"} />
                        ) : (
                          <AiOutlineStar size={25} color={" #8DC049"} />
                        );
                      })}
                    </Col>
                  </Row>
                </div>
              ))}
            </div> */}
          </div>
        </Container>
        {/* <div className="m-2">
          <img src={cdesig} width="100%" height="120px " />
        </div> */}
      </div>
      {/* </Container> */}
      <div className="d-flex justify-content-around ">
        <Button
          className="printbutton"
          style={{
            marginTop: "450px",
            backgroundColor: "#611fd5",
            width: "150px",
            height: "40px",
            fontSize: "large",
          }}
          onClick={Handleprint}
        >
          print
        </Button>
      </div>
    </div>
  );
};

export default Certificate;
