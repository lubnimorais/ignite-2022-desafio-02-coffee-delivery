import styled from "styled-components";

export const ListCoffeesContainer = styled.section`
  width: 100%;

  margin-top: 2rem;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes[`title-title-l`]};
  font-weight: 800;
  color: ${({ theme }) => theme.colors["base-subtitle"]};

  line-height: 130%;

  margin-bottom: 1rem;
`;