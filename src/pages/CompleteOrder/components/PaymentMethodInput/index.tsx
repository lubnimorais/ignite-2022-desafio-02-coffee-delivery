import { ForwardRefRenderFunction, InputHTMLAttributes, ReactNode, forwardRef } from "react";

import { PaymentMethodContent, PaymentMethodInputContainer } from "./styles"

interface IPaymentMethodInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ReactNode
}

const PaymentMethodInputBase: 
  ForwardRefRenderFunction<HTMLInputElement, IPaymentMethodInputProps> = 
  ({ id, label, icon: Icon, ...rest }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input ref={ref} id={id} type="radio" {...rest} name="paymentMethod"/>
      <label htmlFor={id}>
        <PaymentMethodContent>
          {Icon}
          {label}
        </PaymentMethodContent>
        
      </label>
    </PaymentMethodInputContainer>
  )
}

const PaymentMethodInput = forwardRef(PaymentMethodInputBase)

export { PaymentMethodInput }