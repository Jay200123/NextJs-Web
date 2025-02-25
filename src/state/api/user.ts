import { StateCreator } from "zustand";
import { UserApiSlice, User } from "@/types";
import axios from "axios";

export const createUsersApi: StateCreator<UserApiSlice> = (set) => ({
  users: [],
  user: null,
  getAllUsers: async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    set({ users: res?.data });
    return res?.data;
  },
  getUserById: async (id) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    set({ user: res?.data });
    return res?.data;
  },

  addUser: async (payload) => {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      payload
    );

    set((state) => ({ users: [...state.users, res?.data] })); 
  },
  deleteUser: async (id) => {
    // delete user
  },
  updateUser: async (user) => {
    // update user
  },
});
