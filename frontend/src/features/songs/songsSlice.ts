import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { song, stats } from "../../utils/types";

export interface Songs {
  songs: song[];
  fetchSongsStatus: string;
  fetchStatsStatus: string;
  stats: stats | null;
  error: string | null;
}

const initialState: Songs = {
  songs: [],
  fetchSongsStatus: "idle",
  fetchStatsStatus: "idle",
  stats: null,
  error: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsStart(state) {
      state.fetchSongsStatus = "loading";
    },
    getSongsSuccess(state, action: PayloadAction<song[]>) {
      state.fetchSongsStatus = "idle";
      state.songs = action.payload;
      state.error = null;
    },
    getSongsFailure(state, action: PayloadAction<string>) {
      state.fetchSongsStatus = "failed";
      state.error = action.payload;
    },
    createSongStart(state) {
      state.fetchSongsStatus = "loading";
    },
    createSongSuccess(state, action: PayloadAction<song>) {
      state.fetchSongsStatus = "idle";
      state.songs.push(action.payload);
      state.error = null;
    },
    createSongFailure(state, action: PayloadAction<string>) {
      state.fetchSongsStatus = "failed";
      state.error = action.payload;
    },
    filterSongsStart(state) {
      state.fetchSongsStatus = "loading";
    },
    filterSongsSuccess(state, action: PayloadAction<song[]>) {
      state.fetchSongsStatus = "idle";
      state.songs = action.payload;
      state.error = null;
    },
    filterSongsFailure(state, action: PayloadAction<string>) {
      state.fetchSongsStatus = "failed";
      state.error = action.payload;
    },
    getStatsStart(state) {
      state.fetchStatsStatus = "loading";
    },
    getStatsSuccess(state, action: PayloadAction<stats>) {
      state.fetchStatsStatus = "idle";
      state.stats = action.payload;
      state.error = null;
    },
    getStatsFailure(state, action: PayloadAction<string>) {
      state.fetchStatsStatus = "failed";
      state.error = action.payload;
    },
    updateSongStart(state) {
      state.fetchSongsStatus = "loading";
    },
    updateSongSuccess(state, action: PayloadAction<song>) {
      state.fetchSongsStatus = "idle";
      state.songs = state.songs.map((song) =>
        song._id === action.payload._id ? action.payload : song
      );
      state.error = null;
    },
    updateSongFailure(state, action: PayloadAction<string>) {
      state.fetchSongsStatus = "failed";
      state.error = action.payload;
    },
    deleteSongStart(state) {
      state.fetchSongsStatus = "loading";
    },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.fetchSongsStatus = "idle";
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      state.error = null;
    },
    deleteSongFailure(state, action: PayloadAction<string>) {
      state.fetchSongsStatus = "failed";
      state.error = action.payload;
    },
  },
});

export const { getSongsStart, getSongsSuccess, getSongsFailure , createSongStart, createSongSuccess, createSongFailure , filterSongsStart, filterSongsSuccess, filterSongsFailure , getStatsStart, getStatsSuccess, getStatsFailure , updateSongStart, updateSongSuccess, updateSongFailure , deleteSongStart, deleteSongSuccess, deleteSongFailure} = songsSlice.actions;
export default songsSlice.reducer;
