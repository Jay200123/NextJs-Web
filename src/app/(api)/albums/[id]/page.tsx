"use client";
import { useStore } from "@/state/store";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function () {
  const params = useParams();
  const id = Number(params.id);
  const { album, getAlbumById, clearAlbum } = useStore();
  useQuery({
    queryKey: ["album", id],
    queryFn: () => getAlbumById(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  // use for clearing user on unmount component
  useEffect(() => {
    getAlbumById(id);
    return () => {
      clearAlbum();
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center justify-between p-4 my-2 bg-gray-100 rounded-md w-[26rem]">
        <div className="w-full flex flex-col text-left">
          <h1 className="text-lg font-bold">{album?.title}</h1>
        </div>
      </div>
    </div>
  );
}
