import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
  width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes[`title-title-xs`]};
  color: ${({ theme }) => theme.colors[`base-subtitle`]};
  line-height: 130%;
  font-weight: 800;
`;

export const DetailsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors["base-card"]};

  border-radius: 6px 44px 6px 44px;

  padding: 2.5rem;
`;