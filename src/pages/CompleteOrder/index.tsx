import { CompleteOrderForm } from "./components/CompleteOrderForm"
import { SelectedCoffees } from "./components/SelectedCoffees"

import { CompleteOrderContainer } from "./styles"

const CompleteOrder = () => {
  return (
    <CompleteOrderContainer>
      <CompleteOrderForm />

      <SelectedCoffees />
    </CompleteOrderContainer>
  )
}

export { CompleteOrder }