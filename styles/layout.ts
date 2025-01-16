import { css } from "styled-components";
import { media } from "./media";

export const layout = css`
  html,
  body {
    width: 100%;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 40px 120px;
    font-family: "Nunito Sans", sans-serif;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.text};
    box-sizing: border-box;
    overflow-x: hidden;

    ${media.laptop`
      padding: 32px 80px;
    `}
    ${media.tablet`
      padding: 24px 40px;
    `}
    ${media.mobile`
      padding: 16px;
    `}
  }

  .main-content {
    max-width: ${({ theme }) => theme.breakpoints.desktop};
  }

  .section-first-column {
    width: 347px;
    margin-right: 80px;
  }

  section {
    margin-top: 80px;

    ${media.laptop`
      margin-top: 60px;
    `}
    ${media.tablet`
      margin-top: 50px;
    `}

    ${media.mobile`
      margin-top: 40px;
    `}
  }
`;
