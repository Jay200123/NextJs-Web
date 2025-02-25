type Album = {
  userId: number;
  id: number;
  title: string;
};

type AlbumState = {
  albums: Album[];
};

type AlbumActions = {
  getAllAlbums: () => Promise<void>;
  getAlbumById: (id: number) => Promise<void>;
  addAlbum: (album: Album) => Promise<void>;
  updateAlbum: (album: Album) => Promise<void>;
  deleteAlbum: (id: number) => Promise<void>;
};

export type AlbumApiSlice = AlbumState & AlbumActions;
