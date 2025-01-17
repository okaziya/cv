"use client";

import styled from "styled-components";
import { media } from "../../styles/media";

export const LanguageSectionWrapper = styled.section`
  display: flex;

  ${media.tablet`
    flex-direction: column
  `}
`;
