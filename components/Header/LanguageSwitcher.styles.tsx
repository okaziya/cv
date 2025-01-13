"use client";

import Link from "next/link";

import styled from "styled-components";

export const StyledLanguageSwitcher = styled(Link)`
  background-color: transparent;

  img {
    transition: transform 0.2s;
  }

  &:hover {
    background-color: rgba(84, 84, 212, 0.15);
    img {
      transform: scale(1.1);
    }
  }
`;
