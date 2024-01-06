import React from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton variant={variant} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};
