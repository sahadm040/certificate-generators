import {
  ALL_COURSE_FAIL,
  ALL_COURSE_REQUEST,
  ALL_COURSE_SUCCESS,
  CREATE_COURSE_FAIL,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  DELETE_COURSE_FAIL,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  SINGLE_COURSE_FAIL,
  SINGLE_COURSE_REQUEST,
  SINGLE_COURSE_SUCCESS,
  UPDATE_COURSE_FAIL,
  UPDATE_COURSE_REQUEST,
  UPDATE_COURSE_SUCCESS,
} from "../course/actionType";

const initial_state = {
  loading: false,
  error: "",
  courses: [],
  courseDetails: {},
};
const CourseReducer = (state = initial_state, action) => {
  switch (action.type) {
    case CREATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload,
      };
    case CREATE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ALL_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courseDetails: action.payload,
      };
    case ALL_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SINGLE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courseDetails: action.payload,
      };
    case SINGLE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default CourseReducer;
