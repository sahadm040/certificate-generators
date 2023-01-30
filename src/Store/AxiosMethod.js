import axios from "axios";

const BASEURL = "https://api.certificates.edisonvalley.com/api/v1";
const loacalUrl = "http://192.168.1.121.3000/api/v1";

export const AxiosApi = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
});
AxiosApi.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] =
      "Token " + sessionStorage.getItem("token");
  } else {
    console.log("error");
  }
  return config;
});

AxiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    if (status === 401) {
      console.log("not authorized");
      // go to login page
    }
    return Promise.reject(error);
  }
);

// import axios from "axios";

// const BASICURL = "http://api.certificates.edisonvalley.com/api/v1";

// export const axiosApi = axios.create({
//   baseURL: BASICURL,
//   withCredentials: true,
// });

// axiosApi.interceptors.request.use(function (config) {

//   const token = sessionStorage.getItem("token");

//   if (token) {
//     config.headers["Authorization"] =
//       "Token " + sessionStorage.getItem("token");
//   } else {
//     console.log("error");
//   }

//   return config;
// });
