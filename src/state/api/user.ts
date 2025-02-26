import { StateCreator } from "zustand";
import { UserApiSlice } from "@/types";
import api from "../apiClient";

export const createUsersApi: StateCreator<UserApiSlice> = (set) => ({
  users: [],
  user: null,
  getAllUsers: async () => {
    const res = await api.get("/users");
    set({ users: res?.data });
    return res?.data;
  },
  getUserById: async (id) => {
    set((state) => ({
      user: state.users.find((u) => u.id === id), 
    }));
  },

  addUser: async (payload) => {
    const res = await api.post("/users", payload);

    set((state) => ({ users: [...state.users, res?.data] }));
  },
  deleteUser: async (id) => {
    await api.delete(`/users/${id}`);
    set((state) => ({
      users: state.users.filter((u) => u.id !== id),
    }));
  },
  updateUser: async (id, payload) => {
    await api.put(`/users/${id}`);
    set((state) => ({
      users: state.users.map((u) => (u.id === id ? payload : u)),
    }));
  },
  clearUser: () => {
    set({ user: null });
  },
});
