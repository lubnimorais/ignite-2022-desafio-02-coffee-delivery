import { Trash } from "phosphor-react";

import { QuantityInput } from "../../../../components/QuantityInput";

import { ActionsContainer, CardCoffeeCartContainer, RemoveButton, Text } from "./styles";

const CardCoffeeCart = () => {
  return (
    <CardCoffeeCartContainer>
      <div>
        <img src="/coffees/tradicional.png" alt="" />

        <div>
          <Text>Expresso tradicional</Text>

          <ActionsContainer>
            <QuantityInput size="small" />

            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CardCoffeeCartContainer>
  )
}

export { CardCoffeeCart };