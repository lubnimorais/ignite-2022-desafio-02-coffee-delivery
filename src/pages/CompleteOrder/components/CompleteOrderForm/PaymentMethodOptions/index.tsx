import { useFormContext } from "react-hook-form"

import { Bank, CreditCard, Money } from "phosphor-react"

import { PaymentMethodInput } from "../../PaymentMethodInput"

import { PaymentMethodOptionsContainer, ErrorText } from "./styles"

const paymentMethod = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />
  },
}

const PaymentMethodOptions = () => {
  const { register, formState } = useFormContext();

  const { errors } = formState;

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethod).map(([key, { label, icon}]) => 
        <PaymentMethodInput 
          key={label} 
          id={key} 
          label={label} 
          icon={icon} 
          value={key}
          {...register('paymentMethod')}
        />
      )}

      {paymentMethodError && <ErrorText>{paymentMethodError}</ErrorText>}
    </PaymentMethodOptionsContainer>
  )
}

export { PaymentMethodOptions, paymentMethod }