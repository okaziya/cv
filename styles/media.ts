import { css } from "styled-components";
import { theme } from "./theme";

export const media = {
  mobile: (styles: TemplateStringsArray) => css`
    @media (max-width: ${theme.breakpoints.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles: TemplateStringsArray) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      ${styles}
    }
  `,
  laptop: (styles: TemplateStringsArray) => css`
    @media (max-width: ${theme.breakpoints.laptop}) {
      ${styles}
    }
  `,
  desktop: (styles: TemplateStringsArray) => css`
    @media (max-width: ${theme.breakpoints.desktop}) {
      ${styles}
    }
  `,
};
