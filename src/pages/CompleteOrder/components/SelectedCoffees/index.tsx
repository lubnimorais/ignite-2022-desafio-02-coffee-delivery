import { useCart } from "../../../../hooks/cart";

import { CardCoffeeCart } from "../CardCoffeeCart"
import { ConfirmationSection } from "./ConfirmationSection"

import { DetailsContainer, SelectedCoffeesContainer, Title } from "./styles"

const SelectedCoffees = () => {
  const { items } = useCart();

  return (
    <SelectedCoffeesContainer>
      <Title>
        Cafés selecionados
      </Title>

      <DetailsContainer>
        {items.map(item => (
          <CardCoffeeCart key={item.id} coffee={item} />
        ))}
      

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}

export { SelectedCoffees }