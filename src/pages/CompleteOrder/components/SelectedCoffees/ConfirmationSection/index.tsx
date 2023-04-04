import { Button } from "../../../../../components/Button"
import { ConfirmationSectionContainer, TextSmall, TextMedium, TextLarge } from "./styles"

const ConfirmationSection = () => {
  return (
    <ConfirmationSectionContainer>
      <div>
        <TextSmall>Total de itens</TextSmall>
        <TextMedium>R$ 9,90</TextMedium>
      </div>

      <div>
        <TextSmall>Entrega</TextSmall>
        <TextMedium>R$ 3,50</TextMedium>
      </div>

      <div>
        <TextLarge>Total</TextLarge>
        <TextLarge>R$ 29,90</TextLarge>
      </div>

      <Button text="Confirmar pedido" />
    </ConfirmationSectionContainer>
  )
}

export { ConfirmationSection }