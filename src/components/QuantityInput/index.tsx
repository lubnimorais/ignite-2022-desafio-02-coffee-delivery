import { Minus, Plus } from "phosphor-react"
import { ButtonContainer, QuantityInputContainer } from "./styles"

interface IQuantityInputProps {
  size?: 'medium' | 'small';
}

const QuantityInput = ({ size = 'medium' }: IQuantityInputProps) => {
  return (
    <QuantityInputContainer size={size}>
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