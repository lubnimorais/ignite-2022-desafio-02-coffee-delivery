import styled from "styled-components";

export const CardCoffeeContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};

  border-radius: 6px 36px 6px 36px;

  padding: 1.25rem;
  padding-top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem;
  };
`;

export const Tags = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;

  margin-top: 1rem;
  margin-bottom: 1.25rem;

  span {
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    
    font-size: ${({ theme }) => theme.textSizes["components-tag"]};
    font-weight: 700;
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    text-transform: uppercase;

    padding: 0.25rem 0.5rem;

    border-radius: 999px;
  }
`;

export const NameCoffee = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes[`title-title-s`]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors["base-title"]};

  line-height: 1.3;

  margin-bottom: 0.5rem;
`;

export const DescriptionCoffee = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  color: ${({ theme }) => theme.colors["base-label"]};

  line-height: 1.3;

  margin-bottom: 2rem;
`;

export const CardCoffeeFooter = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`;

export const CoffeeSignPrice = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors["base-text"]};

  line-height: 1.3;
`;

export const CoffeePrice = styled.strong`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors["base-text"]};

  line-height: 1.3;
`;

export const AddCartContainer = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;

    
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: ${({ theme }) => theme.colors["brand-purple-dark"]};
    
    color: ${({ theme }) => theme.colors["base-card"]};
    
    border-radius: 6px;
    
    margin-left: 0.3rem;
    
    transition: 0.4s background;
    
    &:hover {
      background: ${({ theme }) => theme.colors["brand-purple"]};
    }
  }
`;