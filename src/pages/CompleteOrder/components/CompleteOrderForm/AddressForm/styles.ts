import styled from "styled-components";

export const AddressFormContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 12.5rem 17.5rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    max-width: 12.5rem;

    grid-column: span 3;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;