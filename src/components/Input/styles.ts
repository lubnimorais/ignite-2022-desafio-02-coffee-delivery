import styled from "styled-components";

export const InputContainer = styled.input`
  height: 2.625rem;

  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  border-radius: 4px;

  background: ${({ theme }) => theme.colors["base-input"]};

  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  padding: 0 0.75rem;

  transition: 0.4s;

  &:focus {
    border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;