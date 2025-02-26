import { StateCreator } from "zustand";
import { PostApiSlice } from "@/types";
import api from "../apiClient";

export const createPostsApi: StateCreator<PostApiSlice> = (set) => ({
  posts: [],
  post: null,
  getAllPosts: async () => {
    const res = await api.get("/posts");
    set({ posts: res.data });
    return res.data;
  },

  getPostById: async (id) => {
    set((state) => ({ post: state.posts.find((p) => p.id === id) }));
  },
  addPost: async (payload) => {
    await api.post("/posts", payload);
    set((state) => ({ posts: [...state.posts, payload] }));
  },
  updatePost: async (id, payload) => {
    await api.put(`/posts/${id}`, payload);
    set((state) => ({
      posts: state.posts.map((p) => (p?.id === id ? payload : p)),
    }));
  },
  deletePost: async (id) => {
    await api.delete(`/posts/${id}`);
    set((state) => ({
      posts: state.posts.filter((p) => p.id !== id),
    }));
  },
});
