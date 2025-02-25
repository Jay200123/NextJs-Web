import { UserApiSlice } from "./users";
import { PostApiSlice } from "./post";
import { TodoApiSlice } from "./todos";
import { AlbumApiSlice } from "./album";

export type Store = UserApiSlice & PostApiSlice & TodoApiSlice & AlbumApiSlice;
