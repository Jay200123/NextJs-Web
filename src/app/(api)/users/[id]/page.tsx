"use client";
import { useStore } from "@/state/store";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
export default function () {
  const params = useParams();
  const id = Number(params.id);
  const { user, getUserById } = useStore();
  useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center justify-between p-4 my-2 bg-gray-100 rounded-md w-[26rem]">
        <div className="w-full flex flex-col text-left">
          <h1 className="text-lg font-bold">{user?.username}</h1>
          <p className="text-sm">{user?.email}</p>
          <h1 className="text-base font-medium">Address</h1>
          <p className="text-sm">
            {user?.address.street} <span>{user?.address.city}</span>
          </p>
          <h1 className="text-base font-medium">Company</h1>
          <p className="text-sm">
            {user?.company?.name} <span>{user?.company?.catchPhrase}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
