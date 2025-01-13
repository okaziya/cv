"use client"
import styled from "styled-components";

export const WorkExperienceSectionWrapper = styled.section`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 52px;
    left: -312px;
    width: 44%;
    height: 39%;
    background: linear-gradient(rgba(84, 84, 212, 0.21), rgba(84, 84, 212, 0.0882));
    filter: blur(300px);
    transform: rotate(45deg);
    z-index: -1;
    border-radius: 233px;
  }
`;