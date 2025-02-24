type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostState = {
  posts: Post[];
};

type PostActions = {
  getAllPosts: () => Promise<void>;
  getPostById: (id: number) => Promise<void>;
  addPost: (post: Post) => Promise<void>;
  deletePost: (id: number) => Promise<void>;
  updatePost: (post: Post) => Promise<void>;
};

export type PostApiSlice = PostState & PostActions;
