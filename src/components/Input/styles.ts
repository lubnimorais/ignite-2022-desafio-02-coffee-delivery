import styled, { css } from "styled-components";

interface IInputContainerProps {
  hasError: boolean;
}


export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  position: relative;

  > p {
    color: ${({ theme }) => theme.colors["base-error"]};
  }
`;

export const InputContainer = styled.div<IInputContainerProps>`
  height: 2.625rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  border-radius: 4px;

  background: ${({ theme }) => theme.colors["base-input"]};

  transition: 0.4s;

  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }

  ${({ theme, hasError }) => 
    hasError && css`
      border-color: ${theme.colors["base-error"]};
    `
  }
`;

export const InputField = styled.input`
  height: 100%;

  flex: 1;

  background: none;

  border: none;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  padding: 0 0.75rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;

export const ErrorText = styled.p`
  font-size: ${({ theme }) => theme.textSizes[`text-regular-s`]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors[`base-text`]};
  line-height: 130%;
`;

export const OptionText = styled.p`
  font-size: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors[`base-label`]};

  margin-right: 0.75rem;
`;