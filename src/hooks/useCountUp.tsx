import { useEffect, useState } from "react";

export const useCountUp = (target: number, start: boolean, duration = 1500) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let raf: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      setValue(Math.floor(progress * target));

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
};
