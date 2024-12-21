import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-webapp-api-afyr.onrender.com",
  withCredentials: true,
});

export default apiRequest;
