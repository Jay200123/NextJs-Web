import { StateCreator } from "zustand";
import { TodoApiSlice } from "@/types";
import api from "../apiClient";

export const createTodoApi: StateCreator<TodoApiSlice> = (set) => ({
  todos: [],
  todo: null,
  getAllTodos: async () => {
    const res = await api.get("/todos");
    set({ todos: res.data });
    return res.data;
  },
  getTodoById: async (id) => {
    set((state) => ({
      todo: state.todos.find((t) => t.id === id) || null,
    }));
  },
  addTodo: async (todo) => {
    //add todo
  },
  updateTodo: async (todo) => {
    //update todo
  },
  deleteTodo: async (id) => {
    //delete todo
  },
  clearTodo: () => {
    set({ todo: null });
  },
});
