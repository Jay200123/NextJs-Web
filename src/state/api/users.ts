import { StateCreator } from "zustand";
import { UserApiSlice } from "@/types";

export const createUsersApi: StateCreator<UserApiSlice> = (_set) => ({
  users: [],
  getAllUsers: async() => {
    // fetch all users  
  },
  getUserById: async(id) => {
    // fetch user by id
  },
  addUser: async(user) => {
    // add user
  },
  deleteUser: async(id) => {
    // delete user
  },
  updateUser: async(user) => {
    // update user
  },
});
