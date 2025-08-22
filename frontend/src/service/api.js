import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // backend runs on port 8080 by default
});

export default api;
