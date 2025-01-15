"use client";

import { createGlobalStyle } from "styled-components";
import { typography } from "./typography";
import { layout } from "./layout";
import { sections } from "./sections";

const GlobalStyle = createGlobalStyle`
  ${layout}
  ${typography}
  ${sections}

  a {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyle;
