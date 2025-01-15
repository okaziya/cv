import { css } from "styled-components";

export const layout = css`
  body {
    margin: 0;
    padding: 40px 120px;
    font-family: "Nunito Sans", sans-serif;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.text};
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .main-content {
    max-width: ${({ theme }) => theme.maxWidth.desktop};
  }

  .section-first-column {
    width: 347px;
    margin-right: 80px;
  }

  section {
    margin-top: 80px;
  }
`;
