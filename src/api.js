import axios from "axios";

let api = axios.create({
  headers: {
    "Client-Id": process.env.REACT_APP_CLIENT_ID,
    Authorization: "Bearer " + window.localStorage.getItem("access_token"),
  },
});

export default api;
