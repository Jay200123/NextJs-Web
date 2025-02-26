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
  addTodo: async (payload) => {
    await api.post("/todos", payload);
    set((state) => ({ todos: [...state.todos, payload] }));
  },
  updateTodo: async (id, payload) => {
    await api.put(`/todos/${id}`, payload);
    set((state) => ({
      todos: state.todos.map((t) => (t.id === id ? payload : t)),
    }));
  },
  deleteTodo: async (id) => {
    await api.delete(`/todos/${id}`);
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    }));
  },
  clearTodo: () => {
    set({ todo: null });
  },
});
