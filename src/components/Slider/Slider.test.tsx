import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "../../test/test-utils";
import type { SlideType } from "../../common/constants";
import Slider from "./Slider";

vi.mock("../../hooks/useSwipe", () => ({
  useSwipe: () => ({}),
}));

const slides: SlideType[] = [
  {
    id: "1",
    image: "/img1.jpg",
    titleKey: "slide:title1",
    captionKey: "slide:caption1",
  },
  {
    id: "2",
    image: "/img2.jpg",
    titleKey: "slide:title2",
    captionKey: "slide:caption2",
  },
];

describe("Slider", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("renders first slide content", () => {
    render(<Slider slides={slides} autoplay={false} />);

    expect(screen.getByText("slide:title1")).toBeInTheDocument();
    expect(screen.getByText("slide:caption1")).toBeInTheDocument();
  });

  it("does not render second slide content initially", () => {
    render(<Slider slides={slides} autoplay={false} />);

    expect(screen.queryByText("slide:title2")).not.toBeVisible();
  });

  it("shows arrows by default", () => {
    render(<Slider slides={slides} autoplay={false} />);

    const arrows = screen.getAllByAltText("arrrow");
    expect(arrows).toHaveLength(2);
  });

  it("hides arrows when showArrows=false", () => {
    render(<Slider slides={slides} autoplay={false} showArrows={false} />);

    expect(screen.queryByAltText("arrrow")).not.toBeInTheDocument();
  });

  it("moves to next slide when right arrow is clicked", () => {
    render(<Slider slides={slides} autoplay={false} />);

    const [, rightArrow] = screen.getAllByAltText("arrrow");

    fireEvent.click(rightArrow);

    expect(screen.getByText("slide:title2")).toBeInTheDocument();
  });

  it("moves to previous slide when left arrow is clicked", () => {
    render(<Slider slides={slides} autoplay={false} />);

    const [leftArrow] = screen.getAllByAltText("arrrow");

    fireEvent.click(screen.getAllByAltText("arrrow")[1]);

    fireEvent.click(leftArrow);

    expect(screen.getByText("slide:title1")).toBeInTheDocument();
  });

  it("autoplays slides when autoplay is enabled", () => {
    render(<Slider slides={slides} autoplay interval={3000} />);

    expect(screen.getByText("slide:title1")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.getByText("slide:title2")).toBeInTheDocument();
  });

  it("loops back to first slide after last slide", () => {
    render(<Slider slides={slides} autoplay interval={3000} />);

    act(() => {
      vi.advanceTimersByTime(3000);
      vi.advanceTimersByTime(3000);
    });

    expect(screen.getByText("slide:title1")).toBeInTheDocument();
  });

  it("renders dots for each slide", () => {
    render(<Slider slides={slides} autoplay={false} />);

    const dots = screen.getAllByRole("button");
    expect(dots.length).toBe(slides.length);
  });

  it("changes slide when dot is clicked", () => {
    render(<Slider slides={slides} autoplay={false} />);

    const dots = screen.getAllByRole("button");

    fireEvent.click(dots[1]);

    expect(screen.getByText("slide:title2")).toBeInTheDocument();
  });
});
