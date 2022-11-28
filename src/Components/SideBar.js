import React from "react";
import "./Sidebar.css";
import { Container } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { FaBuffer } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="sidebar-main ">
      <Container>
        <h3 className="text-muted text-center"> Edisonvalley</h3>
        <p>Menu</p>
        <ul className="side-ul">
          <Link to={"/dashboard"} className="link">
            <li className="list-name">
              <h5>
                <AiFillHome style={{ paddingBottom: "4px" }} className="mx-1" />
                Dashboard
              </h5>
            </li>
          </Link>
          <li className="list-name">
            <h5>
              <ImUser style={{ paddingBottom: "4px" }} className="mx-1" />
              Students
            </h5>
            <ul>
              <li className="list p-0">
                <Link to="/students" className="p-0 link">
                  All students
                </Link>
              </li>
              {
                /* <li className="list">
                <Link to="/updatestudent" className="p-0 m-0 link">
                  Update Student
                </Link>
              </li> */
                <li className="list">
                  <Link to="/studentcourse" className="p-0 m-0 link">
                    studentcourse
                  </Link>
                </li>
              }
              <li className="list">
                <Link to="/createstudent" className="p-0 m-0 link">
                  Create Student
                </Link>
              </li>{" "}
            </ul>
          </li>
          <li className="list-name">
            <h5>
              <FaBuffer style={{ paddingBottom: "4px" }} className="mx-1" />
              courses Category
            </h5>
            <ul>
              <li className="list p-0">
                <Link to="/coursecategories" className="p-0 link">
                  All Category
                </Link>
              </li>
              {/* <li className="list">
                <Link to="/updatecoursecategory" className="p-0 m-0 link">
                  Update Category
                </Link>
              </li> */}
              <li className="list">
                <Link to="/createcoursecategory" className="p-0 m-0 link">
                  Create Category
                </Link>
              </li>
            </ul>
          </li>
          <li className="list-name">
            <h5>
              <ImLibrary style={{ paddingBottom: "4px" }} className="mx-1" />
              courses
            </h5>
            <ul>
              <li className="list p-0">
                <Link to="/courses" className="p-0 link">
                  All Courses
                </Link>
              </li>
              {/* <li className="list">
                <Link to="/updatecourse" className="p-0 m-0 link">
                  Update Courses
                </Link>
              </li> */}
              <li className="list">
                <Link to="/createcourse" className="p-0 m-0 link">
                  Create Courses
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default SideBar;
