"use client";
import { useStore } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  const { posts, getAllPosts, deletePost } = useStore();
  useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
    enabled: false,
    // refetchOnWindowFocus: false, // Disable refetching when switching tabs
    // refetchOnReconnect: false, // Disable refetching when internet reconnects
    // refetchOnMount: false, // Prevent refetching when component remounts
  });
  // const postsData = useMemo(() => posts?.slice(0, 20), [posts]);

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deletePost(id);
    }
  };

  return (
    <div className="flex items-center justify-center w-full mt-4 h-full">
      <div className="flex flex-col w-[32rem] items-center h-full border rounded-md border-gray-400">
        <div className="flex items-center w-full justify-between px-4 py-2">
          <h1 className="text-3xl font-bold">Posts</h1>
          <h1
            onClick={() => router.push("/posts/add")}
            className="text-3xl cursor-pointer font-bold"
          >
            +
          </h1>
        </div>
        {posts?.map((post) => (
          <div
            key={post.id}
            className="flex items-center justify-between p-4 cursor-pointer my-2 bg-gray-100 rounded-md w-[26rem]"
          >
            <div className="w-full flex flex-col text-left">
              <h1
                onClick={() => handleDelete(post.id)}
                className="text-lg text-red-500 cursor-pointer font-bold"
              >
                Delete
              </h1>
              <h1 className="text-lg font-bold">{post.title}</h1>
              <p className="text-sm">{post.body}</p>
              <div className="flex items-center w-full justify-between px-4 py-2">
                <h1
                  onClick={() => router.push(`/posts/${post.id}`)}
                  className="text-lg font-bold"
                >
                  View Post
                </h1>
                <h1
                    onClick={() => router.push(`/posts/edit/${post.id}`)}
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
