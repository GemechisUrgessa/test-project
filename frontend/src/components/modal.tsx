/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Box from "./box";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

function Modal({ isOpen, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <Box
      css={css`
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);
      `}
    >
      <div
        css={css`
          background-color: #fefefe;
          margin: 15% auto;
          padding: 20px;
          border: 1px solid #888;
          width: 50%;
          height: 60%;
          display: flex;
          flex-direction: column;
        `}
      >
        {children as React.ReactElement}
      </div>
    </Box>
  );
}

export default Modal;
