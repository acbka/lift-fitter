import React from "react";
import styled from "styled-components";

type ButtonPropsType = {
  children?: React.ReactNode;
  disabled?: boolean;
  title?: string;
  handleClick: () => void;
};

const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: var(--color-yellow);
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: var(--color-yellow);
  }
`;

const Button = ({
  children,
  disabled,
  title,
  handleClick,
}: ButtonPropsType) => {
  return (
    <StyledButton onClick={handleClick} disabled={disabled}>
      {title || children}
    </StyledButton>
  );
};

export default Button;
