/** @jsxImportSource @emotion/react */
import Box from "./box";
import { css } from "@emotion/react";
import { stats } from "../utils/types";
import { FaMusic } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {} from "react-redux";
import { getStatsStart } from "../features/songs/songsSlice";

const Statistics = ({ stats }: { stats: stats }) => {
  const dispatch = useDispatch();
  if (stats === null) {
    dispatch(getStatsStart());
    return (
      <Box
        css={css`
          max-width: 960px;
          margin: 2rem auto;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        `}
      >
        <h2
          css={css`
            color: #2c3e50;
            font-size: 1.75rem;
            border-bottom: 2px solid #3498db;
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
            text-align: center;
          `}
        >
          Music Dashboard
        </h2>
        <p>Loading...</p>
      </Box>
    );
  }

  return (
    <Box
      css={css`
        max-width: 960px;
        margin: 2rem auto;
        padding: 1.5rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      `}
    >
      <h2
        css={css`
          color: #2c3e50;
          font-size: 1.75rem;
          border-bottom: 2px solid #3498db;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
        `}
      >
        Music Dashboard
      </h2>
      <Box
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1rem;
          text-align: center;
        `}
      >
        {renderStatBox("Total Songs", stats.totalSongs, "#3498db")}
        {renderStatBox("Total Artists", stats.totalArtists, "#9b59b6")}
        {renderStatBox("Total Albums", stats.totalAlbums, "#e74c3c")}
        {renderStatBox("Total Genres", stats.totalGenres, "#f1c40f")}
        {renderStatList("Songs in Genres", stats.songsInGenres, <FaMusic />)}
        {renderStatList("Songs by Artist", stats.songsByArtists, <FaMusic />)}
        {renderStatList("Songs in Albums", stats.songsInAlbums, <FaMusic />)}
      </Box>
    </Box>
  );
};

const renderStatBox = (title: string, count: number, color: string) => (
  <Box
    css={css`
      padding: 1rem;
      background: ${color};
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      &:hover {
        transform: translateY(-2px);
      }
    `}
  >
    <h3
      css={css`
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      `}
    >
      {title}
    </h3>
    <p
      css={css`
        font-size: 2rem;
        font-weight: bold;
        margin: 0;
      `}
    >
      {count}
    </p>
  </Box>
);
const renderStatList = (
  title: string,
  items: { _id: string; count: number }[],
  icon: JSX.Element
) => (
  <Box
    css={css`
      padding: 1rem;
      background: #fff;
      border: 1px solid #e1e1e1;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: box-shadow 0.3s ease-in-out;
      &:hover {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
      }
    `}
  >
    <h3
      css={css`
        font-size: 1.25rem;
        margin-bottom: 1rem;
        color: #2c3e50;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      `}
    >
      {icon}
      {title}
    </h3>
    <ul
      css={css`
        list-style: none;
        padding: 0;
        margin: 0;
        max-height: 200px;
        overflow-y: auto;
      `}
    >
      {items.map((item) => (
        <li
          key={item._id}
          css={css`
            padding: 0.5rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background-color 0.3s ease-in-out;
            &:hover {
              background-color: #f9f9f9;
            }
            &:not(:last-child) {
              border-bottom: 1px solid #eaeaea;
            }
          `}
        >
          <span
            css={css`
              flex: 1;
              font-weight: 500;
              color: #34495e;
            `}
          >
            {item._id}
          </span>
          <span
            css={css`
              background-color: #3498db;
              color: white;
              border-radius: 12px;
              padding: 0.25rem 0.75rem;
              font-size: 0.85rem;
              font-weight: bold;
            `}
          >
            {item.count}
          </span>
        </li>
      ))}
    </ul>
  </Box>
);

export default Statistics;
