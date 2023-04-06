import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useForm, FormProvider } from 'react-hook-form'

import { useCart } from "../../hooks/cart";

import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

import { CompleteOrderForm } from "./components/CompleteOrderForm"
import { SelectedCoffees } from "./components/SelectedCoffees"

import { CompleteOrderFormContainer } from "./styles"

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money'
}

const confirmedOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento'}
    }
  })
});

export type OrderData = zod.infer<typeof confirmedOrderFormValidationSchema>;

interface ConfirmedOrderDataSubmit extends OrderData {}

const CompleteOrder = () => {
  const { cleanCart } = useCart();

  const confirmedOrderForm = useForm<ConfirmedOrderDataSubmit>({
    resolver: zodResolver(confirmedOrderFormValidationSchema)
  });

  const { handleSubmit } = confirmedOrderForm;

  const navigate = useNavigate();
  
  // FUNCTIONS
  const handleConfirmOrder = useCallback((data: ConfirmedOrderDataSubmit) => {
    navigate("/order_confirmed", {
      state: data
    });

    cleanCart();
  }, [cleanCart])
  // END FUNCTIONS

  return (
    <FormProvider {...confirmedOrderForm}>
      <CompleteOrderFormContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrderForm />

        <SelectedCoffees />
      </CompleteOrderFormContainer>
    </FormProvider>
  )
}

export { CompleteOrder }