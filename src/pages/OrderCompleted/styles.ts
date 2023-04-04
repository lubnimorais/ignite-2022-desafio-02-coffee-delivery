import styled from "styled-components";

export const OrderCompletedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  margin-top: 5rem;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes[`title-title-l`]};
  font-weight: 800;
  color: ${({ theme }) => theme.colors[`brand-yellow-dark`]};
  
  line-height: 130%;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.textSizes[`text-regular-l`]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors[`base-subtitle`]};

  line-height: 130%;
`;

export const OrderDetailContainer = styled.div`
  min-width: 32rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border-radius: 6px 36px 6px 36px;

  background: ${({ theme }) => theme.colors[`base-background`]};

  position: relative;

  // NOTE - para fazer uma borda com gradiente, utiliza esse hack do CSS
  &::before {
    content: '';
    
    position: absolute;

    /* NOTE
      Se a grossura da borda for maior, temos que aumentar, mas como é somente de 1px
      só colocamos -1. Isso é a grossura da borda
    */
    inset: -1px;

    //NOTE - temos que incrementar o valor da border-radius de acordo com o inset
    border-radius: 7px 37px 7px 37px;

    z-index: -1;

    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8847F8 98.76%);
  }
`;