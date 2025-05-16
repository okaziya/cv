"use client";

import styled from "styled-components";
import { media } from "../../styles/media";
import { PDFDownloadLink } from "@react-pdf/renderer";

export const StyledPdfLink = styled(PDFDownloadLink)`
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
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
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(107, 107, 241, 1);
    box-shadow: 5px 5px 20px rgba(84, 84, 212, 0.75);
  }

  ${media.mobile`
    white-space: nowrap;
    padding: 12px 16px;
  `}
`;
