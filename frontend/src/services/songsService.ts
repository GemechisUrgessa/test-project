import axios from "axios";
import { song } from "../utils/types";
import { FilterCriteria } from "../features/songs/songsSlice";

const API_URI = import.meta.env.VITE_URI;
class SongsService {

  static async fetchSongs() {
    try {
      const response = await axios.get(`${API_URI}/api/v1/routes`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }

  static async fetchStats() {
    try {
      const response = await axios.get(`${API_URI}/api/v1/routes/stats`);
      console.log(response.data.data, "response");
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }

  static async createSong(song: song) {
    try {
      const response = await axios.post(`${API_URI}/api/v1/routes`, song);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
  static async updateSong(song: song) {
    try {
      const response = await axios.put(
        `${API_URI}/api/v1/routes/${song._id}`,
        song
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
static async filterSongs(filter: FilterCriteria) {
    try {
        const response = await axios.get(`${API_URI}/api/v1/routes/filter`, { params: filter });
        return response.data.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || error.message);
    }
}
  static async deleteSong(id: string) {
    try {
      const response = await axios.delete(`${API_URI}/api/v1/routes/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
}

export default SongsService;
