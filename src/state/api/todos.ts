import { StateCreator } from "zustand";
import { TodoApiSlice } from "@/types";

export const createTodoApi: StateCreator<TodoApiSlice> = (_set) => ({
  todo: [],
  getAllTodos: async () => {
    //fetch all todos
  },
  getTodoById: async (id) => {
    //fetch todo by id
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
});
