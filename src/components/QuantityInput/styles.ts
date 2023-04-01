import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  background: ${({ theme }) => theme.colors["base-button"]};

  border-radius: 6px;

  padding: 0.5rem;

  input {
    width: 100%;

    text-align: center;

    background: none;

    border: none;

    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }
`;

export const ButtonContainer = styled.button.attrs({
  type: 'button'
})`
  width: 0.875rem;
  height: 0.875rem;

  border: none;

  background: none;

  color: ${({ theme }) => theme.colors["brand-purple"]};

  transition: 0.4s color;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;