"use client";
import { useStore } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  const { users, user, getAllUsers, deleteUser } = useStore();

  useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const handleDelete = async (id: number) => {  
    if (window.confirm("Are you sure you want to delete this user?")) {
      await deleteUser(id);
    }
  }

  return (
    <div className="flex items-center justify-center w-full mt-4 h-full">
      <div className="flex flex-col w-[32rem] items-center h-full border rounded-md border-gray-400">
        <div className="flex items-center w-full justify-between px-4 py-2">
          <h1 className="text-3xl font-bold">Users</h1>
          <h1
            onClick={() => router.push("/users/add")}
            className="text-3xl cursor-pointer font-bold"
          >
            +
          </h1>
        </div>
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 cursor-pointer my-2 bg-gray-100 rounded-md w-[26rem]"
          >
            <div className="w-full flex flex-col text-left">
            <h1
              onClick={() => handleDelete(user.id)}
              className="text-lg text-red-500 cursor-pointer font-bold"
            >
              Delete
            </h1>
              <h1 className="text-lg font-bold">{user.username}</h1>
              <p className="text-sm">{user.email}</p>
              <h1 className="text-base font-medium">Address</h1>
              <p className="text-sm">
                {user?.address?.street} <span>{user?.address?.city}</span>
              </p>
              <h1 className="text-base font-medium">Company</h1>
              <p className="text-sm">
                {user?.company?.name} <span>{user?.company?.catchPhrase}</span>
              </p>
              <div className="flex items-center w-full justify-between px-4 py-2">
                <h1
                  onClick={() => router.push(`/users/${user.id}`)}
                  className="text-lg font-bold"
                >
                  View User
                </h1>
                <h1
                  onClick={() => router.push(`/users/edit/${user.id}`)}
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
