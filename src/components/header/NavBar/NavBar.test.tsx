import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen, render } from "../../../test/test-utils";
import NavBar from "./NavBar";

vi.mock("../MobileMenu/MobileMenu", () => ({
  default: () => <div data-testid="mobile-menu">Mobile menu</div>,
}));

vi.mock("../../LanguageSwitcher", () => ({
  default: () => <button data-testid="language-switcher">EN</button>,
}));

vi.mock("../../../utils/getIsActive", () => ({
  getIsActive: vi.fn(() => false),
}));

import { getIsActive } from "../../../utils/getIsActive";

const resizeWindow = (width: number) => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event("resize"));
};

describe("NavBar", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders desktop navigation when screen width > 992", async () => {
    resizeWindow(1200);

    render(<NavBar />);

    expect(await screen.findByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders LanguageSwitcher on desktop", async () => {
    resizeWindow(1200);

    render(<NavBar />);

    expect(await screen.findByTestId("language-switcher")).toBeInTheDocument();
  });

  it("calls getIsActive for each menu item", async () => {
    resizeWindow(1200);

    render(<NavBar />);

    expect(getIsActive).toHaveBeenCalledTimes(5);
  });

  it("passes correct pathname and language to getIsActive", async () => {
    resizeWindow(1200);

    render(<NavBar />, {
      routerProps: { initialEntries: ["/projects"] },
    });

    const calls = vi.mocked(getIsActive).mock.calls;

    calls.forEach((call) => {
      expect(call[0]).toBe("/projects"); 
      expect(call[1]).toBe("en"); 
    });
  });

  it("renders mobile menu when screen width <= 992", async () => {
    resizeWindow(768);

    render(<NavBar />);

    expect(await screen.findByTestId("mobile-menu")).toBeInTheDocument();
  });

  it("does not render desktop menu on mobile", async () => {
    resizeWindow(768);

    render(<NavBar />);

    expect(screen.queryByText("Home")).not.toBeInTheDocument();
    expect(screen.queryByTestId("language-switcher")).not.toBeInTheDocument();
  });
});
