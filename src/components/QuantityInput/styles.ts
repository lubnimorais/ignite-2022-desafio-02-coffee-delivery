import styled, { css } from "styled-components";

interface IQuantityInputContainerProps {
  size?: 'medium' | 'small';
}

export const QuantityInputContainer = styled.div<IQuantityInputContainerProps>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  background: ${({ theme }) => theme.colors["base-button"]};

  border-radius: 6px;

  

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

  ${({ size }) => 
    size === 'medium' && 
    css`
      padding: 0.5rem;
    `}

  ${({ size }) => 
    size === 'small' && 
    css`
      padding: 0.3rem 0.5rem;
    `}
  
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