import styled from "styled-components";

export const CompleteOrderFormContainer = styled.div`
  width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes["title-title-xs"]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors["base-subtitle"]};

  line-height: 1.3;
`;

export const FormSectionContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${({ theme }) => theme.colors["base-card"]};

  border-radius: 6px;

  padding: 2.5rem;
`;
