import { CardCoffeeCart } from "../CardCoffeeCart"
import { ConfirmationSection } from "./ConfirmationSection"

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

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}

export { SelectedCoffees }