import { Minus, Plus } from "phosphor-react"
import { ButtonContainer, QuantityInputContainer } from "./styles"

interface IQuantityInputProps {
  size?: 'medium' | 'small';
  quantity: number;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
}

const QuantityInput = ({
  quantity,
  onIncreaseQuantity, 
  onDecreaseQuantity, 
  size = 'medium' 
}: IQuantityInputProps) => {
  return (
    <QuantityInputContainer size={size}>
      <ButtonContainer disabled={quantity <= 1} onClick={onDecreaseQuantity}>
        <Minus size={14} weight="fill" />
      </ButtonContainer>
      <input type="number" readOnly value={quantity} />
      <ButtonContainer onClick={onIncreaseQuantity}>
        <Plus size={14} weight="fill" />
      </ButtonContainer>
    </QuantityInputContainer>
  )
}

export { QuantityInput }