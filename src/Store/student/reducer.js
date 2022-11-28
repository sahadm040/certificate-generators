import {
  DELETE_COURSE_CATEGORY_FAIL,
  DELETE_COURSE_CATEGORY_REQUEST,
  DELETE_COURSE_CATEGORY_SUCCSESS,
} from "../courseCategory/actionType";
import {
  ALLSTUDENT_VIEW_FAIL,
  ALLSTUDENT_VIEW_REQUEST,
  ALLSTUDENT_VIEW_SUCCESS,
  ALL_STUDENT_COUSE_VIEW_FAIL,
  ALL_STUDENT_COUSE_VIEW_REQUEST,
  ALL_STUDENT_COUSE_VIEW_SUCCESS,
  CREATE_STUDENT_COURSE_FAIL,
  CREATE_STUDENT_COURSE_REQUEST,
  CREATE_STUDENT_COURSE_SUCCESS,
  CREATE_STUDENT_FAIL,
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  SINGLE_VIEW_FAIL,
  SINGLE_VIEW_REQUEST,
  SINGLE_VIEW_SUCCESS,
  STUDENT_COURSE_VIEW_FAIL,
  STUDENT_COURSE_VIEW_REQUEST,
  STUDENT_COURSE_VIEW_SUCCESS,
  UPDATE_STUDENT_FAIL,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
} from "./actionType";

const initial_state = {
  loading: false,
  error: "",
  studentDetails: {},
  student: {},
  studentCourse: {},
  studentCourseDetails: {},
  // students: [],
  // updateDetails: {},
};

const StudentsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case CREATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        // students: [action.payload],
      };
    case CREATE_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ALLSTUDENT_VIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALLSTUDENT_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        studentDetails: action.payload,
      };
    case ALLSTUDENT_VIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SINGLE_VIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        student: action.payload,
      };
    case SINGLE_VIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        // updateDetails: action.payload,
      };
    case UPDATE_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        students: action.payload,
      };
    case DELETE_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_STUDENT_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_STUDENT_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentCourse: action.payload,
      };
    case CREATE_STUDENT_COURSE_FAIL:
      return {
        ...state,
        loading: false,
      };
    case STUDENT_COURSE_VIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STUDENT_COURSE_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        studentCourseDetails: action.payload,
      };
    case STUDENT_COURSE_VIEW_FAIL:
      return {
        ...state,
        loading: false,
      };
    case ALL_STUDENT_COUSE_VIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_STUDENT_COUSE_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        studentCourseDetails: action.payload,
      };
    case ALL_STUDENT_COUSE_VIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_COURSE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
      case DELETE_COURSE_CATEGORY_SUCCSESS:
        return{
          ...state,
          loading:false,
        }
      case DELETE_COURSE_CATEGORY_FAIL:
        return{
          ...state,
          loading:false,
        }
    default:
      return state;
  }
};
export default StudentsReducer;
