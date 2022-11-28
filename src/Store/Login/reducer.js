import {
  STUDENT_LOGIN_FAIL,
  STUDENT_LOGIN_REQUEST,
  STUDENT_LOGIN_SUCCESS,
  STUDENT_LOGOUT_FAIL,
  STUDENT_LOGOUT_REQUEST,
  STUDENT_LOGOUT_SUCCESS,
  STUDENT_PROFILE_FAIL,
  STUDENT_PROFILE_REQUEST,
  STUDENT_PROFILE_SUCCESS,
} from "./actionType";

const initial_state = {
  loading: false,
  error: "",
  loginDetails: [],
};

const LoginReducer = (state = initial_state, action) => {
  switch (action.type) {
    case STUDENT_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STUDENT_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loginDetails: action.payload,
      };
    case STUDENT_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case STUDENT_PROFILE_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case STUDENT_PROFILE_SUCCESS:
      return {
        ...state,
        loginDetails: action.payload,
      };
    case STUDENT_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload,
      };



      case STUDENT_LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        loginDetails: [],
      };
    case STUDENT_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case STUDENT_LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };




    default:
      return state;
  }
};
export default LoginReducer;

