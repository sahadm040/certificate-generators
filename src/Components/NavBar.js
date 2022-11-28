import React from "react";
import { Container, NavDropdown } from "react-bootstrap";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineArrowRight } from "react-icons/ai";

import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../Store/Login/useApi";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginDetails, error, loading } = useSelector((state) => ({
    userDetails: state.LoginReducer.userDetails,
    error: state.LoginReducer.error,
    loading: state.LoginReducer.loading,
  }));
  console.log(loginDetails);
  console.log(loginDetails);
  const HandleLogout = () => {
    dispatch(logoutApi(navigate));
  };

  return (
    <div className="navbar" style={{ backgroundColor: "#FFFFFF" }}>
      <Container>
        <div className="d-flex">
          <div style={{ borderRadius: "2px" }} className=" mx-2 px-2">
            <GoThreeBars />
          </div>
          <input
            style={{
              borderRadius: "20px",
              backgroundColor: "#F3F3F9",
              border: "none",
            }}
            placeholder="Search"
            className="Search-box"
          ></input>
        </div>

        <div className="d-flex">
          <img
            src={require("./images/userlogo.png")}
            alt="certificate"
            className="user-logo mx-2 img-thumb"
          />
          <h5>admin</h5>
          <NavDropdown
            style={{ color: "black" }}
            title=""
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">
              {" "}
              <AiOutlineArrowRight />
              View Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3">
              {" "}
              <AiOutlineArrowRight />
              Settings
            </NavDropdown.Item>
            <NavDropdown.Item
              // href=""
              style={{ color: "red" }}
              onClick={HandleLogout}
            >
              {" "}
              <AiOutlineArrowRight />
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
