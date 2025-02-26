type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostState = {
  posts: Post[];
  post: Post | null;  
};

type PostActions = {
  getAllPosts: () => Promise<void>;
  getPostById: (id: number) => Promise<void>;
  addPost: (payload: Post) => Promise<void>;
  deletePost: (id: number) => Promise<void>;
  updatePost: (id:number, payload: Post) => Promise<void>;
  clearPost: () => void;
};

export type PostApiSlice = PostState & PostActions;
