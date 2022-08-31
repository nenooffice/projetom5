import { ButtonProps } from "../../interfaces";
import { StyledButton } from "./styles";

const Button = ({ text, variant, size, ...props }: ButtonProps) => {
  return (
    <StyledButton { ...props} variant={variant} size={size}>
      {text}
    </StyledButton>
  );
};

export default Button;