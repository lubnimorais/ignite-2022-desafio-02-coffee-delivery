import styled from "styled-components";

export const CardCoffeeCartContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
  
  padding-bottom: 1.5rem;
  
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    // NOTE - para se alinhar acima
    align-self: flex-start;

    font-weight: 700;
  }
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors["base-subtitle"]};

  line-height: 1.3;
`;

export const ActionsContainer = styled.div`
  height: 2rem;

  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const RemoveButton = styled.button`
  height: 100%;
  
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  
  border: none;
  border-radius: 6px;
  
  background: ${({ theme }) => theme.colors["base-button"]};
  
  padding: 0 0.5rem;
  
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }

`;