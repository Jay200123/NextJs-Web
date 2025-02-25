import { create } from "zustand";
import { Store } from "@/types";
import { createUsersApi } from "./api/user";
import { createPostsApi } from "./api/post";
import { createTodoApi } from "./api/todos";
import { createAlbumApi } from "./api/album";
import { persist, createJSONStorage } from "zustand/middleware";

// without local storage persist config
// export const useStore = create<Store>()((...a) => ({
//   ...createUsersApi(...a),
//   ...createPostsApi(...a),
//   ...createTodoApi(...a),
//   ...createAlbumApi(...a),
// }));

// with local storage persist config
export const useStore = create<Store>()(
  persist(
    (...a) => ({
      ...createUsersApi(...a),
      ...createPostsApi(...a),
      ...createTodoApi(...a),
      ...createAlbumApi(...a),
    }),
    {
      name: "store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
