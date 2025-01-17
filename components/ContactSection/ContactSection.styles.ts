"use client";

import styled from "styled-components";
import { media } from "../../styles/media";

export const ContactSectionWrapper = styled.section`
  display: flex;

  ${media.tablet`
    flex-direction: column
  `}
`;
