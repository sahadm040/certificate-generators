import { combineReducers } from "redux";
import LoginReducer from "./Login/reducer";
import StudentsReducer from "./student/reducer";
import CourseCategoryReducer from "./courseCategory/reducer";
import CourseReducer from "./course/reducer";

const rootReducer = combineReducers({
  LoginReducer,
  StudentsReducer,
  CourseCategoryReducer,
  CourseReducer,
});

export default rootReducer;
