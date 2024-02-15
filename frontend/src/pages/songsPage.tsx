/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../utils/theme";
import SongList from "../components/songList";
import Statistics from "../components/statistics";
import Box from "../components/box";

function App() {
  // Dummy data for illustration
  const [songs, setSongs] = useState([
    {
      _id: "65cdbd3c51c844ab2c85f2b6",
      title: "Shape of You",
      artist: "Ed Sheeran",
      album: "÷ (Divide)",
      genre: "Pop",
      __v: 0,
    },
  ]);
  const [stats, setStats] = useState({
    totalSongs: 10,
    totalArtists: 9,
    totalAlbums: 10,
    totalGenres: 6,
    songsInGenres: [
      {
        _id: "Rock",
        count: 2,
      },
      {
        _id: "Country, Hip Hop",
        count: 1,
      },
      {
        _id: "Grunge",
        count: 1,
      },
      {
        _id: "Hip Hop",
        count: 1,
      },
      {
        _id: "Pop",
        count: 4,
      },
      {
        _id: "R&B",
        count: 1,
      },
    ],
    songsByArtists: [
      {
        _id: "Nirvana",
        count: 1,
      },
      {
        _id: "Adele",
        count: 1,
      },
      {
        _id: "The Weeknd",
        count: 1,
      },
      {
        _id: "Ed Sheeran",
        count: 2,
      },
      {
        _id: "Led Zeppelin",
        count: 1,
      },
      {
        _id: "Queen",
        count: 1,
      },
      {
        _id: "Lil Nas X feat. Billy Ray Cyrus",
        count: 1,
      },
      {
        _id: "Eminem",
        count: 1,
      },
      {
        _id: "Billie Eilish",
        count: 1,
      },
    ],
    songsInAlbums: [
      {
        _id: "x",
        count: 1,
      },
      {
        _id: "Led Zeppelin IV",
        count: 1,
      },
      {
        _id: "8 Mile: Music from and Inspired by the Motion Picture",
        count: 1,
      },
      {
        _id: "7",
        count: 1,
      },
      {
        _id: "Nevermind",
        count: 1,
      },
      {
        _id: "21",
        count: 1,
      },
      {
        _id: "A Night at the Opera",
        count: 1,
      },
      {
        _id: "÷ (Divide)",
        count: 1,
      },
      {
        _id: "After Hours",
        count: 1,
      },
      {
        _id: "When We All Fall Asleep, Where Do We Go?",
        count: 1,
      },
    ],
  });
  // Add more songs as needed

  return (
    <ThemeProvider theme={theme}>
      <Box color="text" bg="background">
        <SongList songs={songs} />
        <Statistics stats={stats} />
        {/* Add forms for creating/updating songs */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
