import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import arrrow from "../../assets/arrow-left.svg";
import type { SlideType } from "../../common/constants";
import { useSwipe } from "../../hooks/useSwipe";
import Dots from "../Dots";

export type SliderType = {
  slides: SlideType[];
  height?: string;
  width?: string;
  autoplay?: boolean;
  interval?: number;
  showArrows?: boolean;
};

const SliderWrapper = styled.div<{ $height?: string; $width?: string }>`
  width: ${({ $width }) => $width || "100vw"};
  height: ${({ $height }) => $height || "60vh"};
  min-height: ${({ $height }) => $height || "450px"};
  overflow: hidden;
  position: relative;
  touch-action: pan-y;
  user-select: none;
`;

const SlideItem = styled.div<{ $bg: string; $isActive: boolean }>`
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ $bg }) => $bg}) no-repeat center/cover;
  width: 100%;
  height: 100%;
  padding: 0 48px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  transition:
    opacity 0.5s ease-in-out,
    visibility 0.5s ease-in-out;
  display: flex;
`;

const Section = styled.div`
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
  font-size: 30px;
  font-weight: 600;

  @media (min-width: 576px) {
    font-size: 45px;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    font-size: 58px;
  }
`;

const Caption = styled.p`
  font-size: 0.8em;
  letter-spacing: 5px;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`;

const Arrow = styled.img<{ $direction: "left" | "right" }>`
  position: absolute;
  top: 47%;
  ${({ $direction }) => ($direction === "left" ? "left: 20px" : "right: 20px")};
  transform: translateY(-45%);
  transform: rotate(
    ${({ $direction }) => ($direction === "right" ? "180deg" : "0deg")}
  );
  background: transparent;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Slider = ({
  slides,
  height,
  width,
  autoplay = true,
  interval = 4000,
  showArrows = true,
}: SliderType) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { t } = useTranslation("slider");

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

  const swipeHandlers = useSwipe({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
    onSwipeStart: () => setIsPaused(true),
    onSwipeEnd: () => setIsPaused(false),
  });

  return (
    <SliderWrapper
      $height={height}
      $width={width}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      {...swipeHandlers}
    >
      {slides.map((slide, i) => (
        <SlideItem key={slide.id} $bg={slide.image} $isActive={i === index}>
          {(slide.titleKey && t(slide.titleKey)) ||
          (slide.captionKey && t(slide.captionKey)) ? (
            <Section>
              {slide.titleKey && <Title>{t(slide.titleKey)}</Title>}
              {slide.captionKey && <Caption>{t(slide.captionKey)}</Caption>}
            </Section>
          ) : null}
        </SlideItem>
      ))}
      {showArrows && (
        <>
          <Arrow
            $direction="left"
            onClick={prevSlide}
            src={arrrow}
            alt="arrrow"
          />
          <Arrow
            $direction="right"
            onClick={nextSlide}
            src={arrrow}
            alt="arrrow"
          />
        </>
      )}
      <Dots total={slides.length} activeIndex={index} onDotClick={setIndex} />
    </SliderWrapper>
  );
};

export default Slider;
