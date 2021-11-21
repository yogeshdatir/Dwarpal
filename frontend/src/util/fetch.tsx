import axios from "axios";

const publicFetch = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production" ? process.env.REACT_APP_API_URL : "",
});

export { publicFetch };
