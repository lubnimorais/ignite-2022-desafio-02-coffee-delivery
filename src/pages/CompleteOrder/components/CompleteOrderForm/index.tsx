import { useTheme } from "styled-components"

import { CurrencyDollar, MapPinLine } from "phosphor-react"

import { SectionTitle } from "../SectionTitle"
import { AddressForm } from "./AddressForm"
import { PaymentMethodOptions } from "./PaymentMethodOptions"

import { CompleteOrderFormContainer, FormSectionContainer, Title } from "./styles"

const CompleteOrderForm = () => {
  const theme = useTheme();

  return (
    <CompleteOrderFormContainer>
      <Title>
        Complete seu pedido
      </Title>

      <FormSectionContainer>
        <SectionTitle
          icon={<MapPinLine color={theme.colors["brand-yellow-dark"]} size={22} weight="fill" />}
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          icon={<CurrencyDollar color={theme.colors["brand-purple"]} size={22} weight="fill" />}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />

        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}

export { CompleteOrderForm }