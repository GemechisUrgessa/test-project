/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { ThemeProvider, css } from "@emotion/react";
import { theme } from "../utils/theme";
import SongList from "../components/songList";
import Statistics from "../components/statistics";
import Box from "../components/box";
import FilterHeader from "../components/filterheader";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { getSongsStart, getStatsStart } from "../features/songs/songsSlice";
import { store } from "../app/store";
function SongsPage() {
  const dispatch = useDispatch();
  const [statsRequested, setStatsRequested] = useState(false);

  const songs = useSelector((state: any) => state.songs);
  // console.log(stats);
  useEffect(() => {
    // (async () => {
    dispatch(getSongsStart());
    // await dispatch(getStatsStart());
    // })();
  }, [dispatch]);
  const handleGenrateStats = () => {
    dispatch(getStatsStart());
    setStatsRequested(true);
  };
  // before the component is mounted, fetch the stats
  // if (songs.status === "failed") {
  //   return (
  //     <Box
  //       css={css`
  //         height: 100vh;
  //         width: 100%;
  //         background-color: white;
  //       `}
  //     >
  //       <FilterHeader onFilter={() => {}} />
  //       <Box
  //         css={css`
  //           width: 100%;
  //           height: 50vh;
  //           height: 100%;
  //           color: red;
  //           fontsize: 24px;
  //           margin: 0 auto;
  //           display: flex;
  //           justify-content: center;
  //           align-items: center;
  //         `}
  //       >
  //         <h1>Error fetching Data</h1>
  //       </Box>
  //       <Footer />
  //     </Box>
  //   );
  // }
  // if (songs.status === "loading") {
  //   return (
  //     <Box
  //       css={css`
  //         height: 100vh;
  //         width: 100%;
  //         background-color: white;
  //       `}
  //     >
  //       <FilterHeader onFilter={() => {}} />
  //       <Box
  //         css={css`
  //           width: 100%;
  //           height: 50vh;
  //           height: 100%;
  //           color: black;
  //           fontsize: 24px;
  //           margin: 0 auto;
  //           display: flex;
  //           justify-content: center;
  //           align-items: center;
  //         `}
  //       >
  //         <h1>Loading...</h1>
  //       </Box>
  //       <Footer />
  //     </Box>
  //   );
  // }

  return (
    <ThemeProvider theme={theme}>
      <Box color="text" bg="background">
        <FilterHeader onFilter={() => {}} />
        <SongList songs={songs.songs} />
        <Box
          css={css`
            display: flex;
            justify-content: center;
            margin-top: 2rem;
            margin-bottom: 2rem;
          `}
        >
          <button
            onClick={handleGenrateStats}
            css={css`
              padding: 8px 16px;
              background-color: green;
              cursor: pointer;
              border-radius: 6px;
              &:hover {
                background-color: #43a047;
              }
            `}
          >
            Show Stats
          </button>
        </Box>
        {statsRequested && <Statistics />}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default SongsPage;
