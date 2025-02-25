import { create } from "zustand";
import { Store } from "@/types";
import { createUsersApi } from "./api/user";
import { createPostsApi } from "./api/post";
import { createTodoApi } from "./api/todos";
import { createAlbumApi } from "./api/album";

export const useStore = create<Store>((...a) => ({
  ...createUsersApi(...a),
  ...createPostsApi(...a),
  ...createTodoApi(...a),
  ...createAlbumApi(...a),
}));
