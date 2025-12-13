import React from "react";
import styled from "styled-components";

type ButtonPropsType = {
  children?: React.ReactNode;
  title: string;
  type?: "button" | "submit" | "reset";
  handleClick?: () => void;
  className?: string;
};

const StyledButton = styled.button`
  width: 100%;
  padding: 12px 0;
  font-size: 20px;
  background: var(--color-yellow);
  color: var(--color-dark);
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: #dca435;
  }
`;

const Button = ({
  children,
  className,
  title,
  type = "button",
  handleClick,
}: ButtonPropsType) => {
  return (
    <StyledButton className={className} type={type} onClick={handleClick}>
      {title || children}
    </StyledButton>
  );
};

export default Button;
