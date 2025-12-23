import styled from "styled-components";

type ButtonPropsType = {
  className?: string;
  handleClick?: () => void;
  title: string;
  type?: "button" | "submit" | "reset";
};

const StyledButton = styled.button`
  width: 100%;
  padding: 12px 0;
  font-size: 18px;
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
  className,
  title,
  type = "button",
  handleClick,
}: ButtonPropsType) => {
  return (
    <StyledButton className={className} type={type} onClick={handleClick}>
      {title}
    </StyledButton>
  );
};

export default Button;
