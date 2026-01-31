import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "../../../test/test-utils";
import Header from "./Header";

vi.mock("../../../assets/logo.svg", () => ({
  default: "mocked-logo.svg",
}));

vi.mock("../NavBar/NavBar", () => ({
  default: () => <nav data-testid="navbar">NavBar</nav>,
}));

describe("Header", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
    });
  });

  it("renders header with logo and navbar", () => {
    render(<Header />);

    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "mocked-logo.svg");

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders brand link with correct aria-label", () => {
    render(<Header />);

    const brandLink = screen.getByLabelText(/lift fitter home/i);
    expect(brandLink).toBeInTheDocument();
  });

  it("changes isScrolled state on scroll", () => {
    render(<Header />);

    Object.defineProperty(window, "scrollY", {
      value: 250,
      writable: true,
    });

    window.dispatchEvent(new Event("scroll"));

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("adds scroll listener on mount and removes on unmount", () => {
    const addSpy = vi.spyOn(window, "addEventListener");
    const removeSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = render(<Header />);

    expect(addSpy).toHaveBeenCalledWith("scroll", expect.any(Function));

    unmount();

    expect(removeSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
  });
});
