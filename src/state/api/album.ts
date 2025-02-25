import { StateCreator } from "zustand";
import { AlbumApiSlice } from "@/types";

export const createAlbumApi: StateCreator<AlbumApiSlice> = (_set) => ({
  albums: [],
  getAllAlbums: async () => {
    //fetch all albums
  },
  getAlbumById: async (id: number) => {
    //fetch album by id
  },
  addAlbum: async (album) => {
    //add album
  },
  updateAlbum: async (album) => {
    //update album
  },
  deleteAlbum: async (id: number) => {
    //delete album
  },
});
