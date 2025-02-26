"use client";
import { useStore } from "@/state/store";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function () {
  const params = useParams();
  const id = Number(params.id);
  const { post, getPostById, clearPost } = useStore();
  useQuery({
    queryKey: ["user", id],
    queryFn: () => getPostById(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  // use for clearing user on unmount component
  useEffect(() => {
    getPostById(id);
    return () => {
      clearPost();
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center justify-between p-4 my-2 bg-gray-100 rounded-md w-[26rem]">
        <div className="w-full flex flex-col text-left">
          <h1 className="text-lg font-bold">{post?.title}</h1>
          <p className="text-sm">{post?.body}</p>
        </div>
      </div>
    </div>
  );
}
