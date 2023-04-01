import { Minus, Plus } from "phosphor-react"
import { ButtonContainer, QuantityInputContainer } from "./styles"

const QuantityInput = () => {
  return (
    <QuantityInputContainer>
      <ButtonContainer>
        <Minus size={14} weight="fill" />
      </ButtonContainer>
      <input type="number" readOnly value={1} />
      <ButtonContainer>
        <Plus size={14} weight="fill" />
      </ButtonContainer>
    </QuantityInputContainer>
  )
}

export { QuantityInput }