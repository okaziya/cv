"use client";

import { createGlobalStyle } from "styled-components";
import { typography } from "./typography";
import { layout } from "./layout";
import { sections } from "./sections";

const GlobalStyle = createGlobalStyle`
  ${layout}
  ${typography}
  ${sections}


  .header {
    max-width:  ${({ theme }) => theme.maxWidth.desktop};
    height: 60px;
  }
`;

export default GlobalStyle;
