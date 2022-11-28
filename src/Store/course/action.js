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
} from "./actionType";

//---------------------CREATE COURSE-------------------------//

export const createCourseRequest = (input) => ({
  type: CREATE_COURSE_REQUEST,
  payload: input,
});
export const createCourseSuccess = (courses) => ({
  type: CREATE_COURSE_SUCCESS,
  payload: courses,
});
export const createCourseFail = (error) => ({
  type: CREATE_COURSE_FAIL,
  payload: error,
});

//------------------------ALL COURSE------------------------//

export const allCourseRequest = () => ({
  type: ALL_COURSE_REQUEST,
  payload: "",
});
export const allCourseSuccess = (courseDetails) => ({
  type: ALL_COURSE_SUCCESS,
  payload: courseDetails,
});
export const allCourseFail = (error) => ({
  type: ALL_COURSE_FAIL,
  payload: error,
});

//------------------------DELETE COURSE------------------------//
export const deleteCourseRequest = (id) => ({
  type: DELETE_COURSE_REQUEST,
  payload: id,
});
export const deleteCourseSuccess = () => ({
  type: DELETE_COURSE_SUCCESS,
  payload: "",
});
export const deleteCourseFail = (error) => ({
  type: DELETE_COURSE_FAIL,
  payload: error,
});

//------------------------SINGLE COURSE------------------------//

export const SingleCourseRequest = (id) => ({
  type: SINGLE_COURSE_REQUEST,
  payload: id,
});
export const SingleCourseSuccess = (courseDetails) => ({
  type: SINGLE_COURSE_SUCCESS,
  payload: courseDetails,
});
export const SingleCourseFail = (error) => ({
  type: SINGLE_COURSE_FAIL,
  payload: error,
});

//------------------------UPDATE COURSE------------------------//

export const updateCourseRequest = () =>({
  type:UPDATE_COURSE_REQUEST,
  payload:""
})
export const updateCourseSuccess = () =>({
  type:UPDATE_COURSE_SUCCESS,
  payload:""
})
export const updateCourseFail = (error) =>({
  type:UPDATE_COURSE_FAIL,
  payload:error
})