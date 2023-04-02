import { InputHTMLAttributes } from "react"
import { InputContainer } from "./styles"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IInputProps) => {
  return (
    <InputContainer {...rest } />
  )
}

export { Input }