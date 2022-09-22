import axios from "axios";

export default axios.create({
  baseURL: "https://632a214d1090510116bbdcd5.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});
