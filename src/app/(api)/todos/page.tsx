"use client";
import { useStore } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  const { todos, getAllTodos, deleteTodo } = useStore();
  useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
    enabled: false,
    // refetchOnWindowFocus: false, // Disable refetching when switching tabs
    // refetchOnReconnect: false, // Disable refetching when internet reconnects
    // refetchOnMount: false, // Prevent refetching when component remounts
  });

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      await deleteTodo(id);
    }
  };

  return (
    <div className="flex items-center justify-center w-full mt-4 h-full">
      <div className="flex flex-col w-[32rem] items-center h-full border rounded-md border-gray-400">
        <div className="flex items-center w-full justify-between px-4 py-2">
          <h1 className="text-3xl font-bold">Todo</h1>
          <h1
            onClick={() => router.push("/todos/add")}
            className="text-3xl cursor-pointer font-bold"
          >
            +
          </h1>
        </div>
        {todos?.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between p-4 cursor-pointer my-2 bg-gray-100 rounded-md w-[26rem]"
          >
            <div className="w-full flex flex-col text-left">
              <h1
                onClick={() => handleDelete(todo.id)}
                className="text-lg text-red-500 cursor-pointer font-bold"
              >
                Delete
              </h1>
              <h1 className="text-lg font-bold">{todo.title}</h1>
              <p className="text-sm">
                {todo?.completed ? "Completed" : "Pending"}
              </p>
              <div className="flex items-center w-full justify-between px-4 py-2">
                <h1
                  onClick={() => router.push(`/todos/${todo.id}`)}
                  className="text-lg font-bold"
                >
                  View Todo
                </h1>
                <h1
                  onClick={() => router.push(`/todos/edit/${todo.id}`)}
                  className="text-lg cursor-pointer font-bold"
                >
                  Edit
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
