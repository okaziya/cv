"use client";
import styled from "styled-components";
import { media } from "../../styles/media";

export const EducationSectionWrapper = styled.section`
  position: relative;

  display: flex;

  ${media.tablet`
      flex-direction: column
  `}

  &::before {
    content: "";
    position: absolute;
    top: 300px;
    left: -350px;
    width: 215%;
    height: 860px;
    background: linear-gradient(rgba(251, 168, 28, 0.084), rgba(224, 86, 136, 0.0315));
    filter: blur(100px);
    transform: rotate(-22deg);
    border-radius: 233px;
  }
`;
