import { css } from "styled-components";
import { media } from "./media";

export const typography = css`
  h1 {
    font-weight: 800;
    font-size: 72px;

    ${media.mobile`
       font-size: 48px;
    `}
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

    ${media.tablet`
       font-size: 26px;
       padding-bottom: 16px;
       margin-bottom: 28px;
    `}
  }

  h3 {
    font-weight: 300;

    ${media.mobile`
       font-size: 18px;
    `}
  }

  h5 {
    ${media.mobile`
       font-size: 16px;
       line-height: 24px
    `}
  }
`;
