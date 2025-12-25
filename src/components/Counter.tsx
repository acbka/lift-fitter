import styled from "styled-components";
import { useCountUp } from "../hooks/useCountUp";

type CounterType = {
  start: boolean;
  value: number;
};

const NumberWrapper = styled.div`
  width: 90px;
  text-align: center;
`;

const Number = styled.div`
  margin-bottom: 5px;
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  height: 1.2em;
  font-variant-numeric: tabular-nums;
`;

export const Counter = ({ start, value }: CounterType) => {
  const animatedValue = useCountUp(value, start, 1500);

  const isThousandPlus = value >= 1000;
  const isFinished = animatedValue >= value;

  const displayValue = isThousandPlus
    ? isFinished
      ? `${value / 1000}K`
      : animatedValue
    : animatedValue;

  return (
    <NumberWrapper>
      <Number>{displayValue}</Number>
    </NumberWrapper>
  );
};

export default Counter;
