import { css } from "styled-components";

export const typography = css`
  h1 {
    font-weight: 800;
    font-size: 72px;
  }

  h2 {
    position: relative;
    padding-bottom: 20px;

    &::after {
      content: "";
      bottom: 0;
      left: 0;
      height: 4px;
      width: 80px;
      background: rgba(84, 84, 212, 1);
      position: absolute;
    }
  }

  h3 {
    font-weight: 300;
  }
`;
