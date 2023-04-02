import styled, { css } from "styled-components";

interface HeaderButtonProps {
  variant: 'purple' | "yellow";
}

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  background: ${({ theme }) => theme.colors["base-background"]};
  
  display: flex;
  align-items: center;
  justify-content: center;

  // NOTE - para o Header ficar preso
  position: sticky;

  top: 0;
  left: 0;

  // NOTE - para ficar acima de tudo
  z-index: 5;

  > div {
    width: 100%;
    
    display: flex;
    
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`;

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

  gap: 4px;

  min-width: 2.3rem;
  height: 2.3rem;

  border: none;
  border-radius: 6px;

  padding: 0 0.5rem;

  position: relative;

  ${({ variant, theme }) =>
    css`
      background: ${theme.colors[`brand-${variant}-light`]};
      color: ${theme.colors[`brand-${variant}-dark`]};
    `
  }

${({ variant, theme }) => variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors[`brand-purple`]};
      }
    `
  }
`;