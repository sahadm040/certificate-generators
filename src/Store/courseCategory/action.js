import {
  ALL_COURSE_CATEGORY_FAIL,
  ALL_COURSE_CATEGORY_REQUEST,
  ALL_COURSE_CATEGORY_SUCCSESS,
  CREATE_COURSE_CATEGORY_FAIL,
  CREATE_COURSE_CATEGORY_REQUEST,
  CREATE_COURSE_CATEGORY_SUCCSESS,
  DELETE_COURSE_CATEGORY_FAIL,
  DELETE_COURSE_CATEGORY_REQUEST,
  DELETE_COURSE_CATEGORY_SUCCSESS,
  SINGLE_COURSE_CATEGORY_FAIL,
  SINGLE_COURSE_CATEGORY_REQUEST,
  SINGLE_COURSE_CATEGORY_SUCCESS,
  UPDATE_COURSE_CATEGORY_FAIL,
  UPDATE_COURSE_CATEGORY_REQUEST,
  UPDATE_COURSE_CATEGORY_SUCCESS,
} from "./actionType";

//---------------------CREATE COURSE CATEGORY-------------------------//

export const createCourseCategoryRequest = (state) => ({
  type: CREATE_COURSE_CATEGORY_REQUEST,
  payload: state,
});
export const createCourseCategorySuccess = (category) => ({
  type: CREATE_COURSE_CATEGORY_SUCCSESS,
  payload: category,
});
export const createCourseCategoryFail = (error) => ({
  type: CREATE_COURSE_CATEGORY_FAIL,
  payload: error,
});

//------------------------ALL COURSE CATEGORY------------------------//

export const allCourseCategoryRequest = () => ({
  type: ALL_COURSE_CATEGORY_REQUEST,
  payload: "",
});
export const allCourseCategorySuccess = (categoryDetails) => ({
  type: ALL_COURSE_CATEGORY_SUCCSESS,
  payload: categoryDetails,
});
export const allCourseCategoryFail = (error) => ({
  type: ALL_COURSE_CATEGORY_FAIL,
  payload: error,
});
//------------------------DELETE COURSE CATEGORY------------------------//

export const deleteCourseCategoryRequest = (id) => ({
  type: DELETE_COURSE_CATEGORY_REQUEST,
  payload: id,
});
export const deleteCourseCategorySuccess = () => ({
  type: DELETE_COURSE_CATEGORY_SUCCSESS,
  payload: "",
});
export const deleteCourseCategoryFail = (error) => ({
  type: DELETE_COURSE_CATEGORY_FAIL,
  payload: error,
});

//------------------------SINGLE COURSE CATEGORY------------------------//

export const singleCourseCategoryRequest = () => ({
  type: SINGLE_COURSE_CATEGORY_REQUEST,
  payload: "",
});
export const singleCourseCategorySuccess = (singleCategory) => ({
  type: SINGLE_COURSE_CATEGORY_SUCCESS,
  payload: singleCategory,
});
export const singleCourseCategoryFail = (error) => ({
  type: SINGLE_COURSE_CATEGORY_FAIL,
  payload: error,
});

//------------------------UPDATE COURSE CATEGORY------------------------//

export const updateCourseCategoryRequest = () => ({
  type: UPDATE_COURSE_CATEGORY_REQUEST,
  payload: "",
});
export const updateCourseCategorySuccess = () => ({
  type: UPDATE_COURSE_CATEGORY_SUCCESS,
  payload: "",
});
export const updateCourseCategoryFail = (error) => ({
  type: UPDATE_COURSE_CATEGORY_FAIL,
  payload: error,
});
