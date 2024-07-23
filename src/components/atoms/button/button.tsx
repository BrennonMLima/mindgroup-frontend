import React from 'react';
import { StyledButton } from './button.styles';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick, type = "button" }) => {
  return (
    <StyledButton className={`button ${className}`} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
