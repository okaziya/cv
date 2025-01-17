"use client";

import styled from "styled-components";

export const ExperienceItemArticle = styled.article`
  margin-bottom: 40px;

  h5 {
    font-weight: 700;

    &.company-title {
      font-weight: 300;
    }
  }

  ul {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 20px;
    padding-left: 20px;
    font-weight: 400;
    li {
      padding-top: 16px;
      line-height: 28px;
    }
  }
`;
