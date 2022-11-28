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
const initial_state = {
  loading: false,
  error: "",
  category: [],
  categoryDetails: {},
  singleCategory: {},
};
const CourseCategoryReducer = (state = initial_state, action) => {
  switch (action.type) {
    case CREATE_COURSE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COURSE_CATEGORY_SUCCSESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
    case CREATE_COURSE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ALL_COURSE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_COURSE_CATEGORY_SUCCSESS:
      return {
        ...state,
        loading: false,
        categoryDetails: action.payload,
      };
    case ALL_COURSE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_COURSE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COURSE_CATEGORY_SUCCSESS:
      return {
        ...state,
        loading: false,
        categoryDetails: action.payload,
      };
    case DELETE_COURSE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SINGLE_COURSE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_COURSE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        singleCategory: action.payload,
      };
    case SINGLE_COURSE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case UPDATE_COURSE_CATEGORY_REQUEST:
        return{
          ...state,
          loading:true,
        }
        case UPDATE_COURSE_CATEGORY_SUCCESS:
          return{
            ...state,
            loading:false
          }
          case UPDATE_COURSE_CATEGORY_FAIL:
            return{
              ...state,
              loading:false
            }
    default:
      return state;
  }
};
export default CourseCategoryReducer;
