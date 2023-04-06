import styled from "styled-components";

export const CompleteOrderFormContainer = styled.form`
  margin-top: 2.5rem;

  display: flex;
  gap: 2rem;
`;

export const SectionContainer = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.colors["base-card"]};

  border-radius: 6px;

  padding: 2.5rem;
`;