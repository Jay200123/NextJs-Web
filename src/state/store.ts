import { create } from "zustand";
import { Store } from "@/types";
import { createUsersApi } from "./api/users";

export const useStore = create<Store>((...a) => ({
  ...createUsersApi(...a),
}));
