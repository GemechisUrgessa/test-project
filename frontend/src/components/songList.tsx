/** @jsxImportSource @emotion/react */
import React from "react";
import Box from "./box";
import { song } from "../utils/types";

const SongList = ({ songs }: { songs: song[] }) => {
  return (
    <Box as="ul" m={3} p={0}>
      {songs.map((song) => (
        <Box as="li" key={song._id} p={3} mb={2} bg="background" color="text">
          {song.title} by {song.artist}
          {/* Add buttons or actions for edit/delete here */}
        </Box>
      ))}
    </Box>
  );
};

export default SongList;
