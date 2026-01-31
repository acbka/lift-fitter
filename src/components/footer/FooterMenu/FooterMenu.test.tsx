import { screen, render } from "../../../test/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import FooterMenu from "./FooterMenu";

vi.mock("../../../utils/getIsActive", () => ({
  getIsActive: vi.fn(() => false),
}));

import { getIsActive } from "../../../utils/getIsActive";

const renderFooterMenu = (initialRoute = "/") => {
  return render(<FooterMenu />, {
    routerProps: { initialEntries: [initialRoute] },
  });
};

describe("FooterMenu", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render without errors", () => {
    const { container } = renderFooterMenu();
    const menu = container.firstChild;
    expect(menu).toBeInTheDocument();
  });

  it("should render all menu items", () => {
    renderFooterMenu();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("should render correct number of menu items", () => {
    renderFooterMenu();
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(5);
  });

  it("should render menu items with correct links", () => {
    renderFooterMenu();

    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("About").closest("a")).toHaveAttribute(
      "href",
      "/about",
    );
    expect(screen.getByText("Services").closest("a")).toHaveAttribute(
      "href",
      "/services",
    );
    expect(screen.getByText("Projects").closest("a")).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(screen.getByText("Contact").closest("a")).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  it("should mark home link as active on home page", () => {
    renderFooterMenu("/");

    expect(getIsActive).toHaveBeenCalled();
  });

  it("should mark about link as active on about page", () => {
    renderFooterMenu("/about");

    expect(getIsActive).toHaveBeenCalled();
  });

  it("should use translations from i18n", () => {
    renderFooterMenu();

    expect(screen.queryByText("nav:home")).not.toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("should render menu items in grid layout", () => {
    const { container } = renderFooterMenu();
    const menu = container.firstChild;

    expect(menu).toHaveStyle({
      display: "grid",
    });
  });

  it("should call getIsActive for each menu item", () => {
    renderFooterMenu("/services");

    // Each of 5 menu items calls getIsActive once
    expect(getIsActive).toHaveBeenCalled();
    expect(getIsActive).toHaveBeenCalledTimes(5);
  });

  it("should call getIsActive with correct pathname", () => {
    renderFooterMenu("/projects");

    // Check that it was called with the pathname
    const calls = vi.mocked(getIsActive).mock.calls;
    expect(calls.length).toBe(5);

    // All calls should have '/projects' as first argument
    calls.forEach((call) => {
      expect(call[0]).toBe("/projects");
      expect(call[1]).toBe("en");
    });
  });
});
