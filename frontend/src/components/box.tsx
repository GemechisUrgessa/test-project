/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { space, color } from "styled-system";
import { BoxProps } from "../types";

const Box = styled.div<BoxProps>`
  ${space}
  ${color}
`;

export default Box;
