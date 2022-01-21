import axios from "axios";

const api = axios.create({
  baseURL:
    "https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores",
});

export default api;
