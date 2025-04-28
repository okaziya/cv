"use client";
import styled from "styled-components";
import { media } from "../../styles/media";

export const HeroSectionWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.laptop`
    flex-direction: column
  `}

  .main-info {
    max-width: 560px ${media.laptop`
      align-self: flex-start;
    `};
  }

  .profile-photo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 560px;

    img {
      width: 100%;
      height: auto;
    }

    ${media.laptop`
      align-self: flex-end;
      max-width: 560px; 
      min-width: auto;
      width: 100%; 
    `}

    ${media.tablet`
      max-width: 400px; 
    `}

    ${media.mobile`
      align-self: center;
      max-width: 296px; 
    `}
  }

  h3 {
    color: ${({ theme }) => theme.colors.textMuted};
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
    filter: blur(100px);
    transform: rotate(30deg);
    border-radius: 233px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 570px;
    right: -30%;
    width: 108%;
    height: 45%;
    background: linear-gradient(rgba(251, 168, 28, 0.0832), rgba(224, 86, 136, 0.048));
    filter: blur(100px);
    transform: rotate(-25deg);
    border-radius: 233px;
  }
`;
