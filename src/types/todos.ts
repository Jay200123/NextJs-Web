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
  addTodo: (todo: Todos) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
  updateTodo: (todo: Todos) => Promise<void>;
  clearTodo: () => void;
};

export type TodoApiSlice = TodoState & TodoActions;
