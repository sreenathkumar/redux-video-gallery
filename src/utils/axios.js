import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://json-server-videos.herokuapp.com/",
});

export default axiosInstance;
