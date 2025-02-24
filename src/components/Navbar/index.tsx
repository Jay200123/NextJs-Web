"use client";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();

  return (
    <nav className="flex items-center shadow-md rounded-md border border-gray-50 justify-between w-full h-[4rem]">
      <div className="my-1 mx-2">
        <h3 className="text-lg font-bold">Title Here</h3>
      </div>
      <div>
        <ul className="px-2 py-2 mx-2 my-1">
          <li onClick={()=>router.replace("/")} className="inline-block cursor-pointer px-2 text-sm py-1 font-medium">Home</li>
          <li className="inline-block px-2 text-sm py-1 font-medium">About</li>
          <li className="inline-block px-2 text-sm py-1 font-medium">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
