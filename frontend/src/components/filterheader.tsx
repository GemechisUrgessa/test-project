/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Box from "./box";
import { css } from "@emotion/react";
import { filterCriteria } from "../utils/types";

const inputStyle = css`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  background: white;
  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
  }
  // if width is less than 500px, make it 100%
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const FilterHeader = ({
  onFilter,
}: {
  onFilter: (filters: filterCriteria) => void;
}) => {
  const [filters, setFilters] = useState({
    genre: "",
    artist: "",
    album: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <Box
      as="header"
      css={css`
        display: flex;
        justify-content: center;

        padding: 1rem;
        background: #f5f5f5;
        border-bottom: 1px solid #ddd;
      `}
    >
      <form
        onSubmit={handleSubmit}
        css={css`
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        `}
      >
        <input
          type="text"
          name="genre"
          placeholder="Filter by  Genre"
          value={filters.genre}
          onChange={handleInputChange}
          css={inputStyle}
        />
        <input
          type="text"
          name="artist"
          placeholder="Filter by Artist"
          value={filters.artist}
          onChange={handleInputChange}
          css={inputStyle}
        />
        <input
          type="text"
          name="album"
          placeholder="Filter by  Album"
          value={filters.album}
          onChange={handleInputChange}
          css={inputStyle}
        />
        <button
          type="submit"
          css={css`
            padding: 8px 16px;
            border: none;
            border-radius: 6px;
            background-color: #4caf50;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.2s;
            &:hover {
              background-color: #43a047;
            }
            @media (max-width: 550px) {
              width: 20%;
              border-radius: 0;
              align-self: start;
            }
          `}
        >
          Filter
        </button>
      </form>
    </Box>
  );
};

export default FilterHeader;
