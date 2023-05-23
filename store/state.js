import axios from "axios";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  data: [],
  loading: true,
  getNews: (search = "") =>
    axios
      .get(`https://db-blog-json.vercel.app/posts${search}`)
      .then((res) => {
        set({ data: res.data, loading: false });
      })
      .catch((error) => {
        console.log(error);
      }),
}));
