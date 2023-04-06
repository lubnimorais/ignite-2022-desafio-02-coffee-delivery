import { useCart } from "../../../../../hooks/cart";

import { formatMoney } from "../../../../../utils/Utils";

import { Button } from "../../../../../components/Button";

import { ConfirmationSectionContainer, TextSmall, TextMedium, TextLarge } from "./styles"

const DELIVERY_PRICE = 3.5 * 100;

const ConfirmationSection = () => {
  const { cartItemsTotal, totalItemsCartQuantity } = useCart();

  const cartItemsTotalValueFormatted = formatMoney(cartItemsTotal)
  const cartTotalAmountFormatted = formatMoney(DELIVERY_PRICE + cartItemsTotal);
  const deliverPriceFormatted = formatMoney(DELIVERY_PRICE);

  return (
    <ConfirmationSectionContainer>
      <div>
        <TextSmall>Total de itens</TextSmall>
        <TextMedium>R$ {cartItemsTotalValueFormatted}</TextMedium>
      </div>

      <div>
        <TextSmall>Entrega</TextSmall>
        <TextMedium>R$ {deliverPriceFormatted}</TextMedium>
      </div>

      <div>
        <TextLarge>Total</TextLarge>
        <TextLarge>R$ {cartTotalAmountFormatted}</TextLarge>
      </div>

      <Button type="submit" text="Confirmar pedido" disabled={totalItemsCartQuantity <= 0} />
    </ConfirmationSectionContainer>
  )
}

export { ConfirmationSection }