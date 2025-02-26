"use client";
import { useFormik } from "formik";
import { useStore } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useParams } from "next/navigation";

export default function () {
  const id = Number(useParams().id);
  const router = useRouter();
  const { album, users, getAlbumById, updateAlbum, getAllUsers } = useStore();

  useQuery({
    queryKey: ["album", id],
    queryFn: () => getAlbumById(id),
    enabled: !!id,
  });

  console.log(album);

  useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    enabled: false,
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: album?.id || 0,
      userId: album?.userId || 0,
      title: album?.title || "",
    },
    onSubmit: async (values) => {
      try {
        await updateAlbum(Number(album?.id), values);
        router.push("/albums");
        // refetch();
      } catch (err) {
        throw new Error("Error Adding a New User");
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex w-full h-full items-center justify-center"
    >
      <div className="flex flex-col justify-center w-full h-full p-4 md:w-[32rem]">
        <h3 className="mb-1 text-2xl font-semibold">Album Details</h3>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="id"
            className="text-sm font-medium text-black md:text-base"
          >
            User Id
          </label>
          <select
            name="userId"
            id="userId"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userId}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          >
            {users?.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="title"
            className="text-sm font-medium text-black md:text-base"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.title}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
        </div>

        <button
          disabled={!formik.isValid || formik.isSubmitting}
          className={`text-[1rem] p-2 bg-black  transition-all duration-500 hover:opacity-75 rounded-md text-white mt-4 ${
            !formik?.isValid && "cursor-not-allowed opacity-50"
          }`}
          type="submit"
        >
          Update Album
        </button>
      </div>
    </form>
  );
}
