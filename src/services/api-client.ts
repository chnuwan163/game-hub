import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9c36525910ee40f8b9785b90aba83bb3",
  },
});