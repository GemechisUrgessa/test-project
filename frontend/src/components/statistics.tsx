/** @jsxImportSource @emotion/react */
import React from "react";
import Box from "./box";
import { stats } from "../utils/types";
const Statistics = ({ stats }: { stats: stats }) => {
  return (
    <Box p={3} bg="secondary" color="lightText">
      <h2>Statistics</h2>
      <p>Total Songs: {stats.totalSongs}</p>
      {/* Add more statistics as needed */}
    </Box>
  );
};

export default Statistics;
