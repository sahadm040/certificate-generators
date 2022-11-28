import { AxiosApi } from "../AxiosMethod";
import {
  allCourseFail,
  allCourseRequest,
  allCourseSuccess,
  createCourseFail,
  createCourseRequest,
  createCourseSuccess,
  deleteCourseFail,
  deleteCourseRequest,
  deleteCourseSuccess,
  SingleCourseFail,
  SingleCourseRequest,
  SingleCourseSuccess,
  updateCourseFail,
  updateCourseRequest,
  updateCourseSuccess,
} from "./action";

//-----------------------CREATE COURSE-----------------------------//

export const createCourseApi = (state, navigate) => {
  return async (dispatch) => {
    dispatch(createCourseRequest(state));
    try {
      const res = await AxiosApi.post(`/course/course/`, state);
      dispatch(createCourseSuccess(res?.data));
      navigate("/courses");
    } catch (error) {
      dispatch(createCourseFail(error?.res?.data));
    }
  };
};

//-----------------------ALL  COURSES-----------------------------//

export const allCourseApi = (page) => {
  return async (dispatch) => {
    dispatch(allCourseRequest());
    try {
      const res = await AxiosApi.get(
        `/course/course/?page=${page ? page : 1}`
      );
      dispatch(allCourseSuccess(res?.data));
    } catch (error) {
      dispatch(allCourseFail(error.res?.data));
    }
  };
};

//-----------------------SINGLE VIEW  COURSES-----------------------------//

export const singleCourseApi = (id) => {
  return async (dispatch) => {
    dispatch(SingleCourseRequest());
    try {
      const res = await AxiosApi.get(`/course/course/${id}`);
      dispatch(SingleCourseSuccess(res.data));
    } catch (error) {
      dispatch(SingleCourseFail(error.res.data));
    }
  };
};

//-----------------------DELETE   COURSES-----------------------------//
export const deleteCourseApi = (id, page) => {
  return async (dispatch) => {
    dispatch(deleteCourseRequest(id))
    try {
      const res = await AxiosApi.delete(`/course/course/${id}`)
      dispatch(deleteCourseSuccess(res.data))
      try {
        const res = await AxiosApi.get(
          `/course/course/?page=${page ? page : 1}`
        );
        dispatch(allCourseSuccess(res?.data));
      } catch (error) {
        dispatch(allCourseFail(error.res?.data));
      }
    } catch (error) {
      dispatch(deleteCourseFail(error.res.data))    
    }
  };
};

//-----------------------UPDATE   COURSES-----------------------------//
 export const updateCourseApi = (id,state,navigate) =>{
  return async (dispatch) =>{
    dispatch(updateCourseRequest(id))
    try {
      const res = await AxiosApi.put(`/course/course/${id}/`,state)
      dispatch(updateCourseSuccess(res?.data))
      navigate("/courses")
    } catch (error) {
      dispatch(updateCourseFail(error.res?.data))
    }
  }
 }