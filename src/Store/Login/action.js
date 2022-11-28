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

// -------------log in -------------//

export const studentLoginRequest = (input) => ({
  type: STUDENT_LOGIN_REQUEST,
  payload: input,
});
export const studentLoginSuccess = (user) => ({
  type: STUDENT_LOGIN_SUCCESS,
  payload: user,
});
export const studentLoginFail = (error) => ({
  type: STUDENT_LOGIN_FAIL,
  payload: error,
});

// -------------log out -------------//

export const studentLogoutRequest = (navigate) => ({
  type: STUDENT_LOGOUT_REQUEST,
  payload: navigate,
});
export const studentLogoutSuccess = () => ({
  type: STUDENT_LOGOUT_SUCCESS,
  payload: {},
});
export const studentLogoutFail = (error) => ({
  type: STUDENT_LOGOUT_FAIL,
  payload: error,
});

//-------- user profile ------------//

export const studentProfileRequest = () => ({
  type: STUDENT_PROFILE_REQUEST,
  payload: "",
});
export const studentProfileSuccess = (loginDetails) => ({
  type: STUDENT_PROFILE_SUCCESS,
  payload: loginDetails,
});
export const studentProfileFail = () => ({
  type: STUDENT_PROFILE_FAIL,
  payload: "error",
});