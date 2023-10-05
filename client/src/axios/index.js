import axios from "axios";
import authServices from "../services/authServices";

const Axios = axios.create({
    baseURL: 'http://localhost:6001/api',
    headers: {},
});

Axios.interceptors.request.use(
  (config) => {
    if (config.authorization !== false) {
      const token = authServices.getAuthToken();
      if (token) {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default Axios;