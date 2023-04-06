import { InputHTMLAttributes, forwardRef, ForwardRefRenderFunction } from "react"

import { ErrorText, InputContainer, InputField, InputWrapper, OptionText } from "./styles"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  optionText?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { error, optionText, className, ...rest }, ref) => {
  
    return (
    <InputWrapper className={className}>
      <InputContainer hasError={!!error}>
        <InputField ref={ref} {...rest } />
        {optionText && <OptionText>{optionText}</OptionText>}
      </InputContainer>

      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  )
}

const Input = forwardRef(InputBase);

export { Input }