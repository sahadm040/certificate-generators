import React from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Landind.css";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
function LandingPage() {
  return (
    <div>
      <section className="header">
        <div className="header">
          <Navbar className="navbar" expand="lg">
            <Container>
              <Navbar.Brand href="#" className="n1">
                <Link to="/" style={{ textDecoration: "none" }}>
                  EDISONVALLEY
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="m-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="/" className="n1">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#action2" className="n1">
                    About
                  </Nav.Link>
                  <Nav.Link href="#action3" className="n1">
                    Features
                  </Nav.Link>
                  <Nav.Link href="#action4" className="n1">
                    Team
                  </Nav.Link>
                </Nav>
                <Button variant="outline-light">
                  <Link
                    to="/login"
                    style={{ color: "#3dff3d", textDecoration: "none" }}
                  >
                    Sign in
                  </Link>
                </Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </section>
      <section className="body">
        <div className="banner">
          <Container>
            <Row>
              <Col md="6">
                <div className="right-section">
                  <h2>
                    Maker Your Career <br></br> with EddisonValley
                  </h2>
                  <p className="banner-para">
                    We are a bunch of tech enthusiasts determined to uplift the
                    society utilising the latest technologies around us
                  </p>
                  <Link to="/login">
                    <Button className="bg-warning login-button">Login</Button>
                  </Link>
                </div>
              </Col>
              <Col md="6">
                <div className="left-section">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={require("../Components/images/certificate.png")}
                    alt="certificate"
                  ></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="foooter">
        <div className="footer">
          <Container>
            <Row>
              <Col md="6">
                <h5>EDISONVALLEY</h5>
                <p className="footer-para text-muted">
                  2020 © Edisonvalley. Design & Develop by Osperb <br></br> We
                  are a bunch of tech enthusiasts determined to uplift the
                  society utilising the latest technologies around us
                </p>
              </Col>

              <Col md="6">
                <Row>
                  <Col md="4">
                    <h5>Resources</h5>
                    <p className="footer-right text-muted">Privacy policy</p>
                    <p className="footer-right text-muted">
                      Terms and Condition
                    </p>
                  </Col>
                  <Col md="3">
                    <h5>Company</h5>
                    <p className="footer-right text-muted">About us</p>
                    <p className="footer-right text-muted">Features</p>
                  </Col>
                  <Col md="3">
                    <h5>Social Links</h5>
                    <Link to="https://www.google.com/" className="icon">
                      <MdFacebook />
                    </Link>
                    <Link
                      to="https://www.google.com/"
                      className="icon"
                    >
                      <BsInstagram />
                    </Link>
                    <Link
                      to="https://www.google.com/"
                      className="icon"
                    >
                      <BsTwitter />
                    </Link>
                    
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
