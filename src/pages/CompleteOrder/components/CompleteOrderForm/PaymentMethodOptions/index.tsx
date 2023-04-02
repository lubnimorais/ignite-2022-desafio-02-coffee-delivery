import { PaymentMethodInput } from "../../PaymentMethodInput"

import { PaymentMethodOptionsContainer } from "./styles"

const PaymentMethodOptions = () => {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionsContainer>
  )
}

export { PaymentMethodOptions }