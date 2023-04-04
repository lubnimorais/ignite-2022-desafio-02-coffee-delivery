import styled from "styled-components";

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TextSmall = styled.p`
  font-size: ${({ theme }) => theme.textSizes[`text-regular-s`]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors[`base-text`]};

  line-height: 130%;
`;

export const TextMedium = styled.p`
  font-size: ${({ theme }) => theme.textSizes[`text-regular-m`]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors[`base-text`]};

  line-height: 130%;
`;

export const TextLarge = styled.p`
  font-size: ${({ theme }) => theme.textSizes[`text-regular-l`]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors[`base-subtitle`]};

  line-height: 130%;
`;