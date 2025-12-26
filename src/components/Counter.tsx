import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useCountUp } from "../hooks/useCountUp";
import { formatCompactNumber } from "../utils/formatCompactNumber";
import { formatNumber } from "../utils/formatNumber";

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
  const { i18n } = useTranslation();
  const animatedValue = useCountUp(value, start, 1500);

  const isCompactable = (value: number) =>
    (value >= 1_000 && value % 1_000 === 0) ||
    (value >= 1_000_000 && value % 1_000_000 === 0) ||
    (value >= 1_000_000_000 && value % 1_000_000_000 === 0);

  const isFinished = animatedValue >= value;
  const shouldCompact = isFinished && isCompactable(value);

  const displayValue = shouldCompact
    ? formatCompactNumber(value, i18n.language)
    : formatNumber(animatedValue, i18n.language);

  return (
    <NumberWrapper>
      <Number>{displayValue}</Number>
    </NumberWrapper>
  );
};

export default Counter;
