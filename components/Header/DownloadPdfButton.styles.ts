"use client";

import styled from "styled-components";
import { media } from "../../styles/media";

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.brand};
  border-color: ${({ theme }) => theme.colors.brand};
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  max-height: 60px;
  white-space: nowrap;

  &:hover {
    background-color: rgba(107, 107, 241, 1);
    box-shadow: 5px 5px 20px rgba(84, 84, 212, 0.75);
  }

  ${media.mobile`
    white-space: nowrap;
    padding: 12px 16px;
    max-height: 48px;
  `}
`;
