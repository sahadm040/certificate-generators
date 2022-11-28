import {
  studentLoginFail,
  studentLoginRequest,
  studentLoginSuccess,
  studentLogoutFail,
  studentLogoutRequest,
  studentLogoutSuccess,
  studentProfileFail,
  studentProfileRequest,
  studentProfileSuccess,
} from "./action";
// import axios from "axios";
import { AxiosApi } from "../AxiosMethod";
export const loginApi = (input, navigate) => {
  console.log(input);

  return async (dispatch) => {
    dispatch(studentLoginRequest(input));
    try {
      const res = await AxiosApi.post(`/account/login/`, input);
      console.log(res);
      sessionStorage.setItem("token", res?.data?.token);
      if (res?.data?.token) {
        dispatch(studentLoginSuccess(res.data));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      // console.log(error?.response?.data);
      dispatch(studentLoginFail(error?.response?.data));
    }
  };
};

export const logoutApi = (navigate) => {
  // console.log(input);
  return async (dispatch) => {
    dispatch(studentLogoutRequest());
    try {
      const token = sessionStorage.getItem("token");
      const res = await AxiosApi.post(`/account/logout/`, token);
      console.log(res);
      if (res) {
        dispatch(studentLogoutSuccess(res.data));
        sessionStorage.clear("token");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      // console.log(error?.response?.data);
      dispatch(studentLogoutFail(error?.response?.data));
    }
  };
};

export const profileApi = () => {
  return async (dispatch) => {
    dispatch(studentProfileRequest());
    try {
      const res = await AxiosApi.get(`/account/profile/`);
      if (res) {
        dispatch(studentProfileSuccess(res?.data));
      }
    } catch (error) {
      dispatch(studentProfileFail(error.res.data));
    }
  };
};

// import {
//   loginFail,
//   loginRequest,
//   loginSuccess,
// } from "./action";
// import axios from "axios";
// import { token } from "react";
// import { navigate } from "react-router";
// import { axiosApi } from "./../AxiosMethod";

// export const loginApi = (input, navigate) => {
//   return async (dispatch) => {
//     dispatch(loginRequest(input));

//     try {
//       const user = await axiosApi.post(`/account/login/`,input);
//       // console.log(user);
//       if (user?.data?.token) {
//         sessionStorage.setItem("token", user?.data?.token);
//         dispatch(loginSuccess(user.data));
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.log(error);
//       dispatch(loginFail(error?.response?.data));
//     }
//   };
// };
