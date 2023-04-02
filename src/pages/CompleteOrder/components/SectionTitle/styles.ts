import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const TextMedium = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors["base-subtitle"]};

  line-height: 1.3;
`;

export const TextSmall = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors["base-text"]};

  line-height: 1.3;
`;