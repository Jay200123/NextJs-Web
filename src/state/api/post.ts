import { StateCreator } from "zustand";
import { PostApiSlice } from "@/types";
import axios from "axios";

export const createPostsApi: StateCreator<PostApiSlice> = (_set) => ({
  posts: [],
  getAllPosts: async () => {
    //fetch all posts
  },
  getPostById: async (id) => {
    //fetch post by id
  },
  addPost: async (post) => {
    //add post
  },
  updatePost: async (post) => {
    //update post
  },
  deletePost: async (id) => {
    //delete post
  },
});
