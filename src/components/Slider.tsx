import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import arrrow from "../assets/arrow-left.svg";
import type { Slide } from "../common/constants";

type SliderType = {
  slides: Slide[];
  height?: string;
  width?: string;
  autoplay?: boolean;
  interval?: number;
};

const SliderWrapper = styled.div<{ height?: string; width?: string }>`
  width: ${(props) => props.width || "100vw"};
  height: ${(props) => props.height || "60vh"};
  min-height: 450px;
  overflow: hidden;
  position: relative;
`;

const SlideItem = styled.div<{ bg: string; isActive: boolean }>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bg}) no-repeat center/cover;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isActive ? "flex" : "none")};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--color-white);
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: 60px;
  font-weight: 700;
`;

const Caption = styled.p`
  letter-spacing: 5px;
  line-height: 1.6;
`;

const Arrow = styled.img<{ direction: "left" | "right" }>`
  position: absolute;
  top: 47%;
  ${(props) => (props.direction === "left" ? "left: 20px" : "right: 20px")};
  transform: translateY(-45%);
  transform: rotate(
    ${(props) => (props.direction === "right" ? "180deg" : "0deg")}
  );
  background: transparent;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const Slider = ({
  slides,
  height,
  width,
  autoplay = true,
  interval = 4000,
}: SliderType) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoplay || isPaused) return;

    const timer = setInterval(() => nextSlide(), interval);
    return () => clearInterval(timer);
  }, [autoplay, isPaused, index, interval, nextSlide]);

  return (
    <SliderWrapper
      height={height}
      width={width}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, i) => (
        <SlideItem key={slide.id} bg={slide.image} isActive={i === index}>
          {(slide.title || slide.caption) && (
            <Content>
              {slide.title && <Title>{slide.title}</Title>}
              {slide.caption && <Caption>{slide.caption}</Caption>}
            </Content>
          )}
        </SlideItem>
      ))}
      <Arrow direction="left" onClick={prevSlide} src={arrrow} alt="arrrow" />
      <Arrow direction="right" onClick={nextSlide} src={arrrow} alt="arrrow" />
    </SliderWrapper>
  );
};

export default Slider;
