import axios from "axios";

const baseURL = import.meta.env.VITE_SITE
  ? import.meta.env.VITE_SITE
  : "http://localhost:3000/api";

const api = axios.create({
  baseURL: baseURL,
  // Envia cookies com as requisições
  withCredentials: true,
});

export default api;
