import { AxiosApi } from "../AxiosMethod";
import {
  allStudentCourseViewFail,
  allStudentCourseViewRequest,
  allStudentCourseViewSuccess,
  allStudentViewFail,
  allStudentViewRequest,
  allStudentViewSuccess,
  createStudentCourseFail,
  createStudentCourseRequest,
  createStudentCourseSuccess,
  createStudentFail,
  createStudentRequest,
  createStudentSuccess,
  deleteStudentfail,
  deleteStudentRequest,
  deleteStudentSuccess,
  singleViewFail,
  singleViewRequest,
  singleViewSuccess,
  StudentCourseViewFail,
  StudentCourseViewRequest,
  StudentCourseViewSuccess,
  updateStudentfail,
  updateStudentRequest,
  updateStudentSuccess,
} from "./action";

//-----------------------CREATE STUDENT-----------------------------//

export const studentCreateApi = (state, navigate) => {
  return async (dispatch) => {
    dispatch(createStudentRequest(state));
    try {
      const res = await AxiosApi.post(`/student/student/`, state);
      console.log(res);
      dispatch(createStudentSuccess(res?.data));
      navigate("/students");
    } catch (error) {
      console.log(error);
      dispatch(createStudentFail(error?.res?.data));
    }
  };
};

//-----------------------ALL  STUDENTS-----------------------------//

export const allStudentViewApi = (page) => {
  return async (dispatch) => {
    dispatch(allStudentViewRequest());
    try {
      const res = await AxiosApi.get(
        `/student/student/?page=${page ? page : 1}`
      );
      dispatch(allStudentViewSuccess(res.data));
    } catch (error) {
      dispatch(allStudentViewFail(error.res.data));
    }
  };
};

//-----------------------SINGLE  VIEW-----------------------------//

export const singleViewApi = (id) => {
  return async (dispatch) => {
    dispatch(singleViewRequest());
    try {
      const res = await AxiosApi.get(`/student/student/${id}`);
      dispatch(singleViewSuccess(res.data));
    } catch (error) {
      dispatch(singleViewFail(error.res?.data));
    }
  };
};

//-----------------------UPDATE STUDENT-----------------------------//

export const updateStudentApi = (catId, state, navigate) => {
  return async (dispatch) => {
    dispatch(updateStudentRequest(catId));
    try {
      const res = await AxiosApi.put(`/student/student/${catId}/`, state);
      console.log(res);
      dispatch(updateStudentSuccess(res.data));
      navigate(`/studentview/${catId}`);
    } catch (error) {
      dispatch(updateStudentfail(error.res?.data));
    }
  };
};

//-----------------------DELETE STUDENT-----------------------------//

export const deleteStudentApi = (catId, navigate) => {
  return async (dispatch) => {
    dispatch(deleteStudentRequest(catId));
    try {
      const res = await AxiosApi.delete(`/student/student/${catId}/`);
      console.log(res);
      dispatch(deleteStudentSuccess(res));
      navigate("/students");
    } catch (error) {
      dispatch(deleteStudentfail(error.res?.data));
    }
  };
};

//-----------------------CREAT STUDENT COURSE-----------------------------//

export const createStudentCourseApi = (state, navigate) => {
  return async (dispatch) => {
    dispatch(createStudentCourseRequest());
    try {
      const res = await AxiosApi.post("/student/student_course/", state);
      dispatch(createStudentCourseSuccess(res?.data));
      navigate("/studentcourse");
    } catch (error) {
      dispatch(createStudentCourseFail(error.res?.data));
    }
  };
};

//----------------------- STUDENT COURSE VIEW-----------------------------//

export const studentCourseViewApi = (id) => {
  return async (dispatch) => {
    dispatch(StudentCourseViewRequest());
    try {
      const res = await AxiosApi.get(`/student/student_course/${id}`);
      dispatch(StudentCourseViewSuccess(res.data));
    } catch (error) {
      dispatch(StudentCourseViewFail(error.res?.data));
    }
  };
};

//-----------------------ALL  STUDENTS-----------------------------//

export const allStudentCourseViewApi = (page) => {
  return async (dispatch) => {
    dispatch(allStudentCourseViewRequest());
    try {
      const res = await AxiosApi.get(
        `/student/student_course/?page=${page ? page : 1}`
      );
      dispatch(allStudentCourseViewSuccess(res.data));
    } catch (error) {
      dispatch(allStudentCourseViewFail(error.res.data));
    }
  };
};

//-----------------------ALL  STUDENTS-----------------------------//

export const deleteStudentCourseApi = (id, page) => {
  return async (dispatch) => {
    dispatch(deleteStudentRequest(id));
    try {
      const res = await AxiosApi.delete(`/student/student_course/${id}/`);
      console.log(res);
      dispatch(deleteStudentSuccess(res));
      try {
        const res = await AxiosApi.get(
          `/student/student_course/?page=${page ? page : 1}`
        );
        dispatch(allStudentCourseViewSuccess(res.data));
      } catch (error) {
        dispatch(allStudentCourseViewFail(error.res.data));
      }
    } catch (error) {
      dispatch(deleteStudentfail(error.res?.data));
    }
  };
};
