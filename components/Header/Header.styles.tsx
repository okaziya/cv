"use client";

import styled from "styled-components";
import { media } from "../../styles/media";

export const StyledHeader = styled.header`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  height: 60px;

  ${media.mobile`
    height: 76px;
  `}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 80px;
  margin-bottom: 12px;
  img {
    width: 100%;
    height: auto;
  }

  ${media.mobile`
      max-width: 56px; 
  `}
`;
