import { StateCreator } from "zustand";
import { AlbumApiSlice } from "@/types";
import api from "../apiClient";

export const createAlbumApi: StateCreator<AlbumApiSlice> = (set) => ({
  albums: [],
  album: null,
  getAllAlbums: async () => {
    const res = await api.get("/albums");
    set({ albums: res.data });
  },
  getAlbumById: async (id: number) => {
    set((state) => ({ album: state.albums.find((album) => album.id === id) }));
  },
  addAlbum: async (payload) => {
    const res = await api.post("/albums", payload);
    set((state) => ({ albums: [...state.albums, payload] }));
  },
  updateAlbum: async (id, payload) => {
    await api.put(`/albums/${id}`, payload);
    set((state) => ({
      albums: state.albums.map((album) =>
        album.id === id ? { ...album, ...payload } : album
      ),
    }));
  },
  deleteAlbum: async (id: number) => {
    await api.delete(`/albums/${id}`);
    set((state) => ({
      albums: state.albums.filter((album) => album.id !== id),
    }));
  },
  clearAlbum: () => {
    set({ album: null });
  },
});
