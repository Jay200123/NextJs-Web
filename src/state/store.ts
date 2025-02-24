import { create } from "zustand";
import { Store } from "@/types";
import { createUsersApi } from "./api/user";
import { createPostsApi } from "./api/post";

export const useStore = create<Store>((...a) => ({
  ...createUsersApi(...a),
  ...createPostsApi(...a),
}));
