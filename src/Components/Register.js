import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from "reactstrap";
import "./Login.css";

function Register() {
  return (
    <div className="login-card-main">
      <Card className=" login-card shadow p-5 mb-5 bg-white rounded">
        <Form style={{display:"contents"}}>
        <h3 className="h3-heading">EDISONVALLEY</h3>

        <h5 className="h5-login">Register account</h5>
        <span>User name</span>
        <input type="text" placeholder="Enter username" />
        <span className="resiter-span">Password</span>
        <input type="text" placeholder="Enter Password" />
        <span className="resiter-span" style={{ fontSize: "11px" }}>
          By registering you agree to the Skote
          <Link to={"#"}>
            Terms of Use
          </Link>
        </span>
        <Button>Register</Button>
        <span className="to-register">
          Already have an account ?
          <Link style={{textDecoration:"none"}} to={"/login"}>
            Login
          </Link>
        </span>
        <footer className="footer-register">
          © 2020 Edisonvalley. Design & Develop by Osperb{" "}
        </footer>
        </Form>
      </Card>
    </div>
  );
}

export default Register;
