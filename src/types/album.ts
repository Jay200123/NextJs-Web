type Album = {
  userId: number;
  id: number;
  title: string;
};

type AlbumState = {
  albums: Album[];
  album: Album | null;
};

type AlbumActions = {
  getAllAlbums: () => Promise<void>;
  getAlbumById: (id: number) => Promise<void>;
  addAlbum: (payload: Album) => Promise<void>;
  updateAlbum: (id: number, payload: Album) => Promise<void>;
  deleteAlbum: (id: number) => Promise<void>;
  clearAlbum: () => void; 
};

export type AlbumApiSlice = AlbumState & AlbumActions;
