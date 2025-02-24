"use client";
import Image from "next/image";
import ImageOne from "@/images/Users.avif";
import ImageTwo from "@/images/Post.avif";
import ImageThree from "@/images/Comments.avif";
import ImageFour from "@/images/Albums.avif";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="w-screen h-[32rem] grid grid-cols-4 gap-2">
        <div className="relative shadow-md">
          <h3 onClick={()=>router.replace("/users")} className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-bold">
            Users
          </h3>
          <Image
            src={ImageOne}
            className="w-full h-full object-center rounded-sm"
            alt="Image.jpeg"
          />
        </div>
        <div className="relative shadow-md">
          <h3 onClick={()=>router.replace("/posts")} className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-bold">
            Posts
          </h3>
          <Image
            src={ImageTwo}
            className="w-full h-full rounded-sm object-center"
            alt="Image.jpeg"
          />
        </div>
        <div className="relative shadow-md">
        <h3 onClick={()=>router.replace("/todos")} className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-bold">
           Todos
          </h3>
          <Image
            src={ImageThree}
            className="w-full h-full rounded-sm object-center"
            alt="Image.jpeg"
          />
        </div>
        <div className="relative shadow-md">
        <h3 onClick={()=>router.replace("/albums")} className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-bold">
           Albums
          </h3>
          <Image
            src={ImageFour}
            className="w-full h-full rounded-sm object-center"
            alt="Image.jpeg"
          />
        </div>
      </div>
    </>
  );
}
