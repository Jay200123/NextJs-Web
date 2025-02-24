import { UserApiSlice } from "./users";
import { PostApiSlice } from "./post";

export type Store = UserApiSlice & PostApiSlice;
