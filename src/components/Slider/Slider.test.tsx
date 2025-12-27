import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Slider from "./Slider";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  cleanup();
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
});

const slides = [
  {
    id: "1",
    image: "img1.jpg",
    titleKey: "slide.title.1",
    captionKey: "slide.caption.1",
  },
  {
    id: "2",
    image: "img2.jpg",
    titleKey: "slide.title.2",
    captionKey: "slide.caption.2",
  },
  {
    id: "3",
    image: "img3.jpg",
    titleKey: "slide.title.3",
    captionKey: "slide.caption.3",
  },
];

const renderSlider = (props = {}) =>
  render(
    <Slider
      slides={slides}
      height="500px"
      width="100%"
      interval={4000}
      {...props}
    />
  );

describe("Slider component", () => {
  it("renders all slides", () => {
    renderSlider();
    slides.forEach((slide) => {
      expect(screen.getByText(slide.titleKey)).toBeInTheDocument();
    });
  });

  it("autoplay switches slides", () => {
    renderSlider({ autoplay: true });
    vi.advanceTimersByTime(4000);
    expect(screen.getByText("slide.title.2")).toBeInTheDocument();
  });

  it("pauses autoplay on mouse enter", () => {
    const { container } = renderSlider({ autoplay: true });
    const wrapper = container.firstChild as HTMLElement;

    fireEvent.mouseEnter(wrapper);
    vi.advanceTimersByTime(4000);

    expect(screen.getByText("slide.title.1")).toBeInTheDocument();
  });

  it("resumes autoplay on mouse leave", () => {
    const { container } = renderSlider({ autoplay: true });
    const wrapper = container.firstChild as HTMLElement;

    fireEvent.mouseEnter(wrapper);
    fireEvent.mouseLeave(wrapper);
    vi.advanceTimersByTime(4000);

    expect(screen.getByText("slide.title.2")).toBeInTheDocument();
  });

  it("navigates using arrows", () => {
    renderSlider();
    const arrows = screen.getAllByAltText("arrrow");

    fireEvent.click(arrows[1]);
    expect(screen.getByText("slide.title.2")).toBeInTheDocument();

    fireEvent.click(arrows[0]);
    expect(screen.getByText("slide.title.1")).toBeInTheDocument();
  });

  it("navigates using dots", () => {
    renderSlider();
    const dot = screen.getByLabelText("Go to slide 3");
    fireEvent.click(dot);
    expect(screen.getByText("slide.title.3")).toBeInTheDocument();
  });

  it("swipe left moves to next slide", () => {
    const { container } = renderSlider();
    const wrapper = container.firstChild as HTMLElement;

    fireEvent.touchStart(wrapper, {
      touches: [{ clientX: 200 }],
      targetTouches: [{ clientX: 200 }],
    });
    fireEvent.touchMove(wrapper, {
      touches: [{ clientX: 100 }],
      targetTouches: [{ clientX: 100 }],
    });
    fireEvent.touchEnd(wrapper);

    expect(screen.getByText("slide.title.2")).toBeInTheDocument();
  });

  it("swipe right moves to previous slide", () => {
    const { container } = renderSlider();
    const wrapper = container.firstChild as HTMLElement;

    vi.advanceTimersByTime(4000); // move to slide 2

    fireEvent.touchStart(wrapper, {
      touches: [{ clientX: 100 }],
      targetTouches: [{ clientX: 100 }],
    });
    fireEvent.touchMove(wrapper, {
      touches: [{ clientX: 200 }],
      targetTouches: [{ clientX: 200 }],
    });
    fireEvent.touchEnd(wrapper);

    expect(screen.getByText("slide.title.1")).toBeInTheDocument();
  });

  it("small swipe does not change slide", () => {
    const { container } = renderSlider();
    const wrapper = container.firstChild as HTMLElement;

    fireEvent.touchStart(wrapper, {
      touches: [{ clientX: 200 }],
      targetTouches: [{ clientX: 200 }],
    });
    fireEvent.touchMove(wrapper, {
      touches: [{ clientX: 180 }],
      targetTouches: [{ clientX: 180 }],
    });
    fireEvent.touchEnd(wrapper);

    expect(screen.getByText("slide.title.1")).toBeInTheDocument();
  });
});
