import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "../../../test/test-utils";
import MobileMenu from "./MobileMenu";

vi.mock("../../LanguageSwitcher", () => ({
  default: () => <button data-testid="lang-switcher">Lang</button>,
}));

vi.mock("../../../utils/getIsActive", () => ({
  getIsActive: vi.fn(() => false),
}));

describe("MobileMenu", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders language switcher and burger button", () => {
    render(<MobileMenu />);

    expect(screen.getByTestId("lang-switcher")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /toggle menu/i }),
    ).toBeInTheDocument();
  });

  it("does not show menu items initially", () => {
    render(<MobileMenu />);

    const homeLink = screen.getByText("Home");

    expect(homeLink).not.toBeVisible();
  });

  it("opens menu on burger click", () => {
    render(<MobileMenu />);

    const burger = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(burger);

    expect(screen.getByText("Home")).toBeVisible();
    expect(screen.getByText("About")).toBeVisible();
  });

  it("closes menu when clicking a link", () => {
    render(<MobileMenu />);

    const burger = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(burger);

    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeVisible();

    fireEvent.click(homeLink);

    expect(homeLink).not.toBeVisible();
  });
});
