import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors["base-white"]};
  
  line-height: 1.3rem;
  
  padding: 0.75rem 2.8rem;
  
  background: ${({ theme }) => theme.colors["brand-yellow"]};
  
  border: none;
  border-radius: 6px;
  
  margin-top: 0.7rem;
  
  text-transform: uppercase;
  
  transition: 0.4s;

  &:disabled {
    opacity: 0.7;
    
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;