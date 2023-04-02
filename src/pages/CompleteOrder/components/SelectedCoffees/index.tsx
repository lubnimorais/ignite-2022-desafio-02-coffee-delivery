import { CardCoffeeCart } from "../CardCoffeeCart"

import { DetailsContainer, SelectedCoffeesContainer, Title } from "./styles"

const SelectedCoffees = () => {
  return (
    <SelectedCoffeesContainer>
      <Title>
        Cafés selecionados
      </Title>

      <DetailsContainer>
        <CardCoffeeCart />
        <CardCoffeeCart />
        <CardCoffeeCart />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}

export { SelectedCoffees }