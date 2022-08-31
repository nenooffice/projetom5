import { InputProps } from "../../interfaces";
import { StyledInput } from "./styles";

const Input = ({ inputSize, ...props }: InputProps) => {
  return <StyledInput inputSize={inputSize} {...props} />;
};

export default Input;
