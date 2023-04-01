import axios from "axios";

const baseApi = axios.create({
  baseURL: "http://localhost:9001/api/v3",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": "true",
  },
});
export default baseApi;