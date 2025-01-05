"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    padding: 0;
    font-family: var(--font-nunito), sans-serif; 
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-nunito), sans-serif;
  }
`;

export default GlobalStyle;
