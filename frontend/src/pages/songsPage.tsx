/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { ThemeProvider, css } from "@emotion/react";
import { theme } from "../utils/theme";
import SongList from "../components/songList";
import Statistics from "../components/statistics";
import Box from "../components/box";
import FilterHeader from "../components/filterheader";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { createSongStart, getSongsStart } from "../features/songs/songsSlice";

import Modal from "../components/modal";
import EditSong from "../components/editSong";

function SongsPage() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [songToCreate, setSongToCreate] = useState({
    title: "",
    album: "",
    artist: "",
    genre: "",
  });

  const songs = useSelector((state: any) => state.songs);
  useEffect(() => {
    dispatch(getSongsStart());
  }, [dispatch]);
  const handleCreateSongModal = () => {
    setIsModalOpen(true);
  };

  const handleCreateSong = (song: {
    title: string;
    album: string;
    artist: string;
    genre: string;
  }) => {
    dispatch(createSongStart(song));
    dispatch(getSongsStart());
    // Note: window.location.reload() is not a good practice
    window.location.reload();
    setIsModalOpen(false);
  };
  if (songs.status === "failed") {
    return (
      <Box
        css={css`
          height: 100vh;
          width: 100%;
          background-color: white;
        `}
      >
        <FilterHeader />
        <Box
          css={css`
            width: 100%;
            height: 50vh;
            height: 100%;
            color: red;
            fontsize: 24px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <h1>Error fetching Data</h1>
        </Box>
        <Footer />
      </Box>
    );
  }
  if (songs.status === "loading") {
    return (
      <Box
        css={css`
          height: 100vh;
          width: 100%;
          background-color: white;
        `}
      >
        <FilterHeader />
        <Box
          css={css`
            width: 100%;
            height: 50vh;
            height: 100%;
            color: black;
            fontsize: 24px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <h1>Loading...</h1>
        </Box>
        <Footer />
      </Box>
    );
  }

  if (songs.length === 0) {
    return (
      <Box
        css={css`
          height: 100vh;
          width: 100%;
          background-color: white;
        `}
      >
        <FilterHeader />
        <Box
          css={css`
            width: 100%;
            height: 50vh;
            height: 100%;
            color: black;
            fontsize: 24px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          <h1
            css={css`
              color: #666;
              font-size: 1.5rem;
              margin-bottom: 1rem;
            `}
          >
            There are no songs in the database
          </h1>
          <h2
            css={css`
              color: #666;
              font-size: 1.5rem;
              margin-bottom: 1rem;
            `}
          >
            Add a song to get started
          </h2>
          <button
            css={css`
              padding: 8px 16px;
              background-color: green;
              cursor: pointer;
              border-radius: 6px;
              border: none;
              &:hover {
                background-color: #43a047;
              }
            `}
            onClick={handleCreateSongModal}
          >
            Add Song
          </button>
        </Box>
        {isModalOpen && (
          <Modal isOpen={isModalOpen}>
            <EditSong
              onClose={() => setIsModalOpen(false)}
              isOpen={isModalOpen}
              song={songToCreate}
              onSave={handleCreateSong}
            />
          </Modal>
        )}
        <Footer />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box color="text" bg="background">
        <FilterHeader />
        <Box
          css={css`
            display: flex;
            justify-content: start;
            margin-top: 1rem;
            margin-bottom: 1rem;
            position: relative;
            left: 18%;
          `}
        >
          <button
            onClick={handleCreateSongModal}
            css={css`
              padding: 8px 16px;
              background-color: green;
              cursor: pointer;
              border-radius: 6px;
              border: none;
              &:hover {
                background-color: #43a047;
              }
            `}
          >
            Add Song
          </button>
        </Box>
        <SongList songs={songs.songs} />

        <Statistics stats={songs.stats} />
        <Footer />
      </Box>
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <EditSong
            onClose={() => setIsModalOpen(false)}
            isOpen={isModalOpen}
            song={songToCreate}
            onSave={handleCreateSong}
          />
        </Modal>
      )}
    </ThemeProvider>
  );
}

export default SongsPage;
