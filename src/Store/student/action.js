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
  DELETE_STUDENT_COURSE_FAIL,
  DELETE_STUDENT_COURSE_REQUEST,
  DELETE_STUDENT_COURSE_SUCCESS,
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

//------------------------CREATE STUDENT ---------------------------//
export const createStudentRequest = (input) => ({
  type: CREATE_STUDENT_REQUEST,
  payload: input,
});
export const createStudentSuccess = (students) => ({
  type: CREATE_STUDENT_SUCCESS,
  payload: students,
});
export const createStudentFail = (error) => ({
  type: CREATE_STUDENT_FAIL,
  payload: error,
});

//-----------------------ALL STUDENT VIEW --------------------------//
export const allStudentViewRequest = () => ({
  type: ALLSTUDENT_VIEW_REQUEST,
  payload: "",
});
export const allStudentViewSuccess = (studentDetails) => ({
  type: ALLSTUDENT_VIEW_SUCCESS,
  payload: studentDetails,
});
export const allStudentViewFail = (error) => ({
  type: ALLSTUDENT_VIEW_FAIL,
  payload: error,
});

//----------------------- STUDENT VIEW --------------------------//

export const singleViewRequest = (id) => ({
  type: SINGLE_VIEW_REQUEST,
  payload: id,
});
export const singleViewSuccess = (studentDetails) => ({
  type: SINGLE_VIEW_SUCCESS,
  payload: studentDetails,
});
export const singleViewFail = () => ({
  type: SINGLE_VIEW_FAIL,
  payload: "",
});

//-----------------------UPDATE STUDENT --------------------------//
export const updateStudentRequest = (id) => ({
  type: UPDATE_STUDENT_REQUEST,
  payload: id,
});
export const updateStudentSuccess = (id, updateDetails) => ({
  type: UPDATE_STUDENT_SUCCESS,
  payload: id,
  updateDetails,
});
export const updateStudentfail = () => ({
  type: UPDATE_STUDENT_FAIL,
  payload: "",
});

//-----------------------DELETE STUDENT --------------------------//
export const deleteStudentRequest = (id, navigate) => ({
  type: DELETE_STUDENT_REQUEST,
  payload: id,
  navigate,
});
export const deleteStudentSuccess = (students) => ({
  type: DELETE_STUDENT_SUCCESS,
  payload: students,
});
export const deleteStudentfail = () => ({
  type: DELETE_STUDENT_FAIL,
  payload: "",
});

//----------------------- STUDENT COURSE --------------------------//

export const createStudentCourseRequest = () => ({
  type: CREATE_STUDENT_COURSE_REQUEST,
  payload: "",
});
export const createStudentCourseSuccess = (studentCourse) => ({
  type: CREATE_STUDENT_COURSE_SUCCESS,
  payload: studentCourse,
});
export const createStudentCourseFail = (error) => ({
  type: CREATE_STUDENT_COURSE_FAIL,
  payload: error,
});

//----------------------- STUDENT COURSE VIEW --------------------------//

export const StudentCourseViewRequest = () => ({
  type: STUDENT_COURSE_VIEW_REQUEST,
  payload: "",
});
export const StudentCourseViewSuccess = (studentCourseDetails) => ({
  type: STUDENT_COURSE_VIEW_SUCCESS,
  payload: studentCourseDetails,
});
export const StudentCourseViewFail = (error) => ({
  type: STUDENT_COURSE_VIEW_FAIL,
  payload: error,
});

//-----------------------ALL STUDENT COURSE VIEW --------------------------//
export const allStudentCourseViewRequest = () => ({
  type: ALL_STUDENT_COUSE_VIEW_REQUEST,
  payload: "",
});
export const allStudentCourseViewSuccess = (studentCourseDetails) => ({
  type: ALL_STUDENT_COUSE_VIEW_SUCCESS,
  payload: studentCourseDetails,
});
export const allStudentCourseViewFail = (error) => ({
  type: ALL_STUDENT_COUSE_VIEW_FAIL,
  payload: error,
});


//-----------------------DELETE STUDENT COURSE --------------------------//

export const deleteStudentCourseRequest = () =>({
  type:DELETE_STUDENT_COURSE_REQUEST,
  payload:""
})
export const deleteStudentCourseSuccess = () =>({
  type:DELETE_STUDENT_COURSE_SUCCESS,
  payload:""
})
export const  deleteStudentCourseFail = (error) =>({
  type:DELETE_STUDENT_COURSE_FAIL,
  payload:"error"
})