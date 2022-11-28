import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CourseCategories from "./Components/CourseCategories";
import Courses from "./Components/Courses";
import CreateCourse from "./Components/CreateCourse";
import CreateCourseCategory from "./Components/CreateCourseCategory";
import CreateStudent from "./Components/CreateStudent";
import DashBoard from "./Components/DashBoard";
import LandingPage from "./Components/LandingPage";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import Register from "./Components/Register";
import StudentCourse from "./Components/StudentCourse";
import Students from "./Components/Students";
import StudentView from "./Components/StudentView";
import UpdaeStudent from "./Components/UpdaeStudent";
import UpdateCourse from "./Components/UpdateCourse";
import UpdateCourseCategory from "./Components/UpdateCourseCategory";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import CreateStudentCourse from "./Components/CreateStudentCourse";
import Certificate from "./Components/Certificate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/createstudent" element={<CreateStudent />} />
        <Route path="/updatestudent/:id" element={<UpdaeStudent />} />
        <Route path="/students" element={<Students />} />
        <Route path="/studentview/:id" element={<StudentView />} />
        <Route path="/studentcourse" element={<StudentCourse />} />
        <Route path="/createcourse" element={<CreateCourse />} />
        <Route path="/updatecourse/:id" element={<UpdateCourse />} />
        <Route path="/courses" element={<Courses />} />
        <Route
          path="/createcoursecategory"
          element={<CreateCourseCategory />}
        />
        <Route
          path="/updatecoursecategory/:id"
          element={<UpdateCourseCategory />}
        />
        <Route path="/coursecategories" element={<CourseCategories />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/createstudentcourse" element={<CreateStudentCourse />} />
        <Route path="/certificate/:id" element={<Certificate />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
