import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { song, stats } from "../../utils/types";
export interface FilterCriteria {
  artist: string;
  album: string;
  genre: string;
}
interface SongToCreate {
  title: string;
  artist: string;
  album: string;
  genre: string;
}
export interface Songs {
  songs: song[];
  status: string;
  stats: stats | null;
  error: string | null;
  updateSong : song | null;
  deleteSong : string | null;
  filterCriteria : FilterCriteria;
  setSongToCreate : { title: string, artist: string, album: string, genre: string } ;
}

const initialState: Songs = {
  songs: [],
  status: "idle",
  stats: null,
  error: null,
  updateSong : null,
  deleteSong : null,
  filterCriteria : { artist: "", album: "", genre: "" },
  setSongToCreate : { title: "", artist: "", album: "", genre: "" }
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsStart(state) {
      state.status = "loading";
    },
    getSongsSuccess(state, action: PayloadAction<song[]>) {
      state.status = "idle";
      state.songs = action.payload;
      state.error = null;
    },
    getSongsFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    createSongStart(state, action: PayloadAction<SongToCreate>) {
      state.status = "loading";
      state.setSongToCreate = action.payload;
    },
    createSongSuccess(state, action: PayloadAction<song>) {
      state.status = "idle";
      state.songs.push(action.payload);
      state.error = null;
    },
    createSongFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    filterSongsStart(state, action: PayloadAction<FilterCriteria>) {
      state.status = "loading";
      state.filterCriteria = action.payload;
    },
    filterSongsSuccess(state, action: PayloadAction<song[]>) {
      state.status = "idle";
      state.songs = action.payload;
      state.error = null;
    },
    filterSongsFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    getStatsStart(state) {
      state.status = "loading";
      
    },
    getStatsSuccess(state, action: PayloadAction<stats>) {
      state.status = "idle";
      state.stats = action.payload;
      state.error = null;
    },
    getStatsFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    updateSongStart(state, action: PayloadAction<song>) {
      state.status = "loading";
      state.updateSong = action.payload;
    },
    updateSongSuccess(state, action: PayloadAction<song>) {
      state.status = "idle";
      const index = state.songs.findIndex(song => song._id === action.payload._id);
      if (index !== -1) {
        state.songs[index] = action.payload; // Replace with the updated song
      }
      state.error = null;
    },
    updateSongFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    deleteSongStart(state, action: PayloadAction<string>) {
      state.status = "loading";
      state.deleteSong = action.payload;
    },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.status = "idle";
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      state.error = null;
    },
    deleteSongFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { getSongsStart, getSongsSuccess, getSongsFailure , createSongStart, createSongSuccess, createSongFailure , filterSongsStart, filterSongsSuccess, filterSongsFailure , getStatsStart, getStatsSuccess, getStatsFailure , updateSongStart, updateSongSuccess, updateSongFailure , deleteSongStart, deleteSongSuccess, deleteSongFailure} = songsSlice.actions;
export default songsSlice.reducer;
