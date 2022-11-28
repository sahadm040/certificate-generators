import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "reactstrap";
import { loginApi } from "../Store/Login/useApi";
import "./Login.css";

const Login = () => {
  const { loading  } = useSelector((state) => ({
    loading: state.LoginReducer.loading,
  }));

  // console.log(loading);

  const navigate = useNavigate();

  // console.log(userDetails);
  const dispatch = useDispatch();
  const [state, setState] = useState("");
 
  // console.log(state);

  const HandleLogin = (e) => {
    e.preventDefault(); 
    dispatch(loginApi(state, navigate));
  };
  return (
    <div className=" login-card-main">
      <Card className="  login-card shadow p-5 mb-5 bg-white rounded">
        <Form onSubmit={HandleLogin} style={{ display: "contents" }}>
          <h3 className="h3-heading">EDISONVALLEY</h3>
          <h5 className="h5-login">Login</h5>

          <span className="text">User name</span>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={(e) => setState({ ...state, username: e.target.value })}
          />
          <span className="text">Password</span>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <Button type="submit">{loading ? "loading..." : "Login "}</Button>
          <span className="to-register">
            You don't have an account ?
            <Link style={{ textDecoration: "none" }} to={"/register"}>
              Register
            </Link>
          </span>
          <footer>© 2020 Edisonvalley. Design & Develop by Osperb </footer>
        </Form>
      </Card>
    </div>
  );
};

export default Login;