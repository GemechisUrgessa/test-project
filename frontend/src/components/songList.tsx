/** @jsxImportSource @emotion/react */
import React from "react";
import Box from "./box";
import { song } from "../utils/types";
import { css } from "@emotion/react";
import { FaMusic } from "react-icons/fa";

const SongList = ({ songs }: { songs: song[] }) => {
  return (
    <Box
      css={css`
        max-width: 960px;
        margin: 2rem auto;
        padding: 1rem;
        background: white;
        border-radius: 6px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        font-size: 16px;
      `}
    >
      {songs.map((song) => (
        <Box
          key={song._id}
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            margin-bottom: 1rem;
            transition: background-color 0.2s;
            border-radius: 6px;
            &:hover {
              background-color: #f8f8f8;
            }

            &:not(:last-of-type) {
              border-bottom: 1px solid #eaeaea;
            }
          `}
        >
          <Box
            css={css`
              display: flex;
              align-items: center;
              gap: 16px;
            `}
          >
            <FaMusic size="1.5em" color="#666" />
            <Box
              css={css`
                font-size: 1rem;
                display: flex;
                flex-direction: column;
                gap: 4px;
              `}
            >
              <span
                css={css`
                  font-weight: bold;
                `}
              >
                {song.title}
              </span>
              <span
                css={css`
                  color: #666;
                `}
              >
                {song.artist}
              </span>
            </Box>
            <Box
              css={css`
                font-size: 0.875rem;
                padding: 4px 12px;
                background-color: #f3f3f3;
                border-radius: 6px;
                border: 1px solid #e1e1e1;
                color: #333;
                margin-right: 8px;
                margin-top: 17px;
              `}
            >
              {song.album}
            </Box>
            <Box
              css={css`
                font-size: 0.875rem;
                padding: 4px 12px;
                background-color: #e7f4e4;
                border-radius: 6px;
                border: 1px solid #d4e2d4;
                color: #2c662d;
                margin-top: 17px;
              `}
            >
              {song.genre}
            </Box>
          </Box>

          <Box
            css={css`
              button {
                padding: 8px 16px;
                border: none;
                border-radius: 6px;
                font-weight: bold;
                text-transform: uppercase;
                transition: filter 0.2s;

                &:hover {
                  filter: brightness(0.9);
                }

                &:first-of-type {
                  margin-right: 8px;
                }
              }
            `}
          >
            <button
              css={css`
                padding: 8px 16px;
                background-color: #4caf50;
                cursor: pointer;
                border-radius: 6px;
              `}
            >
              Edit
            </button>
            <button
              css={css`
                padding: 8px 16px;
                background-color: #f44336;
                cursor: pointer;
                border-radius: 6px;
              `}
            >
              Delete
            </button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SongList;
