import { AxiosApi } from "../AxiosMethod";
import {
  allCourseCategoryFail,
  allCourseCategoryRequest,
  allCourseCategorySuccess,
  createCourseCategoryFail,
  createCourseCategoryRequest,
  createCourseCategorySuccess,
  deleteCourseCategoryFail,
  deleteCourseCategoryRequest,
  deleteCourseCategorySuccess,
  singleCourseCategoryFail,
  singleCourseCategoryRequest,
  singleCourseCategorySuccess,
  updateCourseCategoryFail,
  updateCourseCategoryRequest,
  updateCourseCategorySuccess,
} from "./action";

//-----------------------CREATE COURSE CATEGORY-----------------------------//

export const cousreCategoryApi = (state, navigate) => {
  return async (dispatch) => {
    dispatch(createCourseCategoryRequest(state));
    try {
      const res = await AxiosApi.post(`/course/course_category/`, state);
      console.log(res);
      dispatch(createCourseCategorySuccess(res?.data));
      navigate("/coursecategories");
    } catch (error) {
      console.log(error);
      dispatch(createCourseCategoryFail(error?.res?.data));
    }
  };
};

//-----------------------ALL COURSE CATEGORY-----------------------------//

export const allCourseCategoryApi = (page) => {
  return async (dispatch) => {
    dispatch(allCourseCategoryRequest());
    try {
      const res = await AxiosApi.get(
        `/course/course_category/?page=${page ? page : 1}`
      );
      dispatch(allCourseCategorySuccess(res.data));
    } catch (error) {
      dispatch(allCourseCategoryFail(error.res.data));
    }
  };
};

//-----------------------DELETE COURSE CATEGORY-----------------------------//

export const deleteCourseCategoryApi = (id, page) => {
  return async (dispatch) => {
    dispatch(deleteCourseCategoryRequest(id));
    try {
      const res = await AxiosApi.delete(`/course/course_category/${id}`);
      dispatch(deleteCourseCategorySuccess(res));
      try {
        const res = await AxiosApi.get(
          `/course/course_category/?page=${page ? page : 1}`
        );
        dispatch(allCourseCategorySuccess(res.data));
      } catch (error) {
        dispatch(allCourseCategoryFail(error.res.data));
      }
    } catch (error) {
      dispatch(deleteCourseCategoryFail(error.res?.data));
    }
  };
};

//-----------------------SINGLE VIEW COURSE CATEGORY-----------------------------//
export const singleCourseCategoryApi = (id) => {
  return async (dispatch) => {
    dispatch(singleCourseCategoryRequest());
    try {
      const res = await AxiosApi.get(`/course/course_category/${id}`);
      dispatch(singleCourseCategorySuccess(res.data));
    } catch (error) {
      dispatch(singleCourseCategoryFail(error.res?.data));
    }
  };
};

//-----------------------UPDATE COURSE CATEGORY-----------------------------//

export const updateCourseCategoryApi = (id, state, navigate) => {
  return async (dispatch) => {
    dispatch(updateCourseCategoryRequest(id));
    try {
      const res = await AxiosApi.put(`/course/course_category/${id}/`, state);
      dispatch(updateCourseCategorySuccess(res.data));
      navigate(`/coursecategories`);
    } catch (error) {
      dispatch(updateCourseCategoryFail(error.res?.data));
    }
  };
};
