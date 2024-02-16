/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { song } from "../utils/types";
import Box from "./box";

const DeleteSong = ({
  song,
  onClose,
  isOpen,
  onDelete,
}: {
  song: song;
  onClose: () => void;
  isOpen: boolean;
  onDelete: (songId: string) => void;
}) => {
  const [deleteSong, setDeleteSong] = useState(song);
  useEffect(() => {
    setDeleteSong(song);
  }, [song]);
  if (!isOpen) return null;

  const handleDelete = () => {
    onDelete(song._id);
  };
  return (
    <>
      <Box
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <h2>
          <span
            css={css`
              color: red;
            `}
          >
            Delete song from your list{" "}
          </span>
        </h2>

        <span
          css={css`
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            align-self: flex-end;
            justify-self: flex-end;
            &hover: {
              color: #000;
              text-decoration: none;
              cursor: pointer;
            }
            &:focus: {
              color: #000;
              text-decoration: none;
              cursor: pointer;
            }
          `}
          onClick={onClose}
        >
          &times;
        </span>
      </Box>
      <Box>
        <p>
          {deleteSong.title} by {deleteSong.artist}
        </p>
      </Box>
      <button
        css={css`
          padding: 8px 16px;
          background-color: red;
          cursor: pointer;
          border-radius: 6px;
          margin-top: 1rem;
          border: none;
          &:hover {
            background-color: #f44336;
          }
        `}
        onClick={handleDelete}
      >
        Confirm Delete!
      </button>
    </>
  );
};

export default DeleteSong;
