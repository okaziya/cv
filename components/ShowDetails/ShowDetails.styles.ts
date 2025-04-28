import styled from "styled-components";

export const AccordionWrapper = styled.div`
  width: 100%;
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.brandBright};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brand};
    background: none;
  }
`;

export const ArrowIcon = styled.span<{ isExpanded: boolean }>`
  transition: transform 0.3s ease;
  display: inline-block;
  transform: ${({ isExpanded }) => (isExpanded ? "rotate(90deg)" : "rotate(0)")};
`;

export const Details = styled.div<{ isExpanded: boolean }>`
  width: 100%;
  overflow: hidden;
  transition: ${({ theme }) => (theme.isSafari ? "none" : " max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;")};

  max-height: ${({ isExpanded }) => (isExpanded ? "100%" : "0")};
  opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
  margin-top: ${({ isExpanded }) => (isExpanded ? "10px" : "0")};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 20px;
  strong,
  hr {
    color: ${({ theme }) => theme.colors.text};
  }
`;
