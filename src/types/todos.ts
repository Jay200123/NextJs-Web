type Todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TodoState = {
  todos: Todos[];
  todo: Todos | null;
};

type TodoActions = {
  getAllTodos: () => Promise<void>;
  getTodoById: (id: number) => Promise<void>;
  addTodo: (payload: Todos) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
  updateTodo: (id: number, payload: Todos) => Promise<void>;
  clearTodo: () => void;
};

export type TodoApiSlice = TodoState & TodoActions;
