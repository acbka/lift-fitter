import { useRef } from "react";

type UseSwipeParams = {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  minDistance?: number;
  onSwipeStart?: () => void;
  onSwipeEnd?: () => void;
};

export const useSwipe = ({
  onSwipeLeft,
  onSwipeRight,
  minDistance = 50,
  onSwipeStart,
  onSwipeEnd,
}: UseSwipeParams) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    onSwipeStart?.();
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      onSwipeEnd?.();
      return;
    }

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < minDistance) {
      onSwipeEnd?.();
      return;
    }

    if (distance > 0) {
      onSwipeLeft();
    } else {
      onSwipeRight();
    }

    onSwipeEnd?.();
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
