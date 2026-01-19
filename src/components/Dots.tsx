import styled from "styled-components";

type DotsType = {
  total: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
};

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const Dot = styled.button<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--color-white)" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-white);
  }
`;

const Dots = ({ total, activeIndex, onDotClick }: DotsType) => {
  return (
    <DotsContainer>
      {Array.from({ length: total }).map((_, i) => (
        <Dot
          key={i}
          $isActive={i === activeIndex}
          onClick={() => onDotClick(i)}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </DotsContainer>
  );
};

export default Dots;
