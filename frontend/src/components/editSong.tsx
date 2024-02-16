/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { song } from "../utils/types";
import Box from "./box";

const EditSong = ({
  song,
  onClose,
  isOpen,
  onSave,
}: {
  song: song | { title: string; artist: string; album: string; genre: string };
  onClose: () => void;
  isOpen: boolean;
  onSave: (
    song: song | { title: string; artist: string; album: string; genre: string }
  ) => void;
}) => {
  const [editedSong, setEditedSong] = useState(song);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setEditedSong(song);
  }, [song]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (
      editedSong.title.trim() === "" ||
      editedSong.artist.trim() === "" ||
      editedSong.album.trim() === "" ||
      editedSong.genre.trim() === ""
    ) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    onSave(editedSong);
    onClose();
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
              color: green;
            `}
          >
            Create new song to your list{" "}
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
      <Box
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
          @media (max-width: 868px) {
            width: 100%;
          }
          @media (min-width: 870px) {
            width: 30rem;
          }
          input {
            padding: 8px;
            border-radius: 6px;
            border: 1px solid #d4e2d4;
            background-color: white;
            color: gray;
          }
          input:focus {
            outline: none;
            border: 1px solid #4caf50;
          }
        `}
      >
        <input
          type="text"
          value={editedSong.title}
          onChange={(e) =>
            setEditedSong({ ...editedSong, title: e.target.value })
          }
          placeholder="Title"
        />
        <input
          type="text"
          value={editedSong.artist}
          onChange={(e) =>
            setEditedSong({ ...editedSong, artist: e.target.value })
          }
          placeholder="Artist"
        />
        <input
          type="text"
          value={editedSong.album}
          onChange={(e) =>
            setEditedSong({ ...editedSong, album: e.target.value })
          }
          placeholder="Album"
        />
        <input
          type="text"
          value={editedSong.genre}
          onChange={(e) =>
            setEditedSong({ ...editedSong, genre: e.target.value })
          }
          placeholder="Genre"
        />
        {errorMessage && (
          <p
            css={css`
              color: red;
              margin-top: 0.5rem;
            `}
          >
            {errorMessage}
          </p>
        )}
      </Box>

      <button
        css={css`
          padding: 8px 16px;
          background-color: green;
          cursor: pointer;
          border-radius: 6px;
          width: 100px;
          margin-top: 1rem;
          border: none;
          &:hover {
            background-color: #43a047;
          }
        `}
        onClick={handleSave}
      >
        Save
      </button>
    </>
  );
};

export default EditSong;
