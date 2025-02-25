import { UserApiSlice } from "./users";
import { PostApiSlice } from "./post";
import { TodoApiSlice } from "./todos";

export type Store = UserApiSlice & PostApiSlice & TodoApiSlice;
