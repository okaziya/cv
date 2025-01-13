"use client"
import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
  position: relative;

  h1 {
    font-weight: 800;
    font-size: 72px;
  }

  h3 {
    color: rgba(255, 255, 255, 0.7);
    font-size: 26px;
    line-height: 34px;
    position: relative;
    padding-top: 24px;
    margin-top: 24px;

    &::before {
      content: "";
      top: 0;
      left: 0;
      height: 4px;
      width: 80px;
      background: rgba(84, 84, 212, 1);
      position: absolute;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 231px;
    left: -401px;
    width: 108%;
    height: 35%;
    background: linear-gradient(rgba(84, 84, 212, 0.27), rgba(84, 84, 212, 0.1134));
    filter: blur(300px);
    transform: rotate(30deg);
    z-index: -1;
    border-radius: 233px;
  }
`;
