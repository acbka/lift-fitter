import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router";
import FooterMenu from "./FooterMenu";
import * as getIsActiveModule from "../../../utils/getIsActive";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "nav:home": "Home",
        "nav:about": "About",
        "nav:services": "Services",
        "nav:projects": "Projects",
        "nav:contact": "Contact",
      };
      return translations[key] || key;
    },
    i18n: {
      language: "en",
      changeLanguage: vi.fn(),
    },
  }),
}));

vi.mock("../../../utils/getIsActive", () => ({
  getIsActive: vi.fn((pathname, language, link, exact) => {
    if (exact) {
      return pathname === link || pathname === `/${language}${link}`;
    }
    return (
      pathname.startsWith(link) || pathname.startsWith(`/${language}${link}`)
    );
  }),
}));

vi.mock("../../../common/constants", () => ({
  menuItems: [
    { link: "/", labelKey: "nav:home", exact: true },
    { link: "/about", labelKey: "nav:about", exact: false },
    { link: "/services", labelKey: "nav:services", exact: false },
    { link: "/projects", labelKey: "nav:projects", exact: false },
    { link: "/contact", labelKey: "nav:contact", exact: false },
  ],
}));

const renderFooterMenu = (initialRoute = "/") => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <FooterMenu />
    </MemoryRouter>,
  );
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
    const getIsActiveSpy = vi.spyOn(getIsActiveModule, "getIsActive");
    renderFooterMenu("/");

    expect(getIsActiveSpy).toHaveBeenCalledWith("/", "en", "/", true);
  });

  it("should mark about link as active on about page", () => {
    const getIsActiveSpy = vi.spyOn(getIsActiveModule, "getIsActive");
    renderFooterMenu("/about");

    expect(getIsActiveSpy).toHaveBeenCalledWith(
      "/about",
      "en",
      "/about",
      false,
    );
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
    const getIsActiveSpy = vi.spyOn(getIsActiveModule, "getIsActive");
    renderFooterMenu("/services");
    expect(getIsActiveSpy).toHaveBeenCalledTimes(5);
  });

  it("should pass correct parameters to getIsActive", () => {
    const getIsActiveSpy = vi.spyOn(getIsActiveModule, "getIsActive");
    renderFooterMenu("/projects");

    expect(getIsActiveSpy).toHaveBeenCalledWith("/projects", "en", "/", true);
    expect(getIsActiveSpy).toHaveBeenCalledWith(
      "/projects",
      "en",
      "/about",
      false,
    );
    expect(getIsActiveSpy).toHaveBeenCalledWith(
      "/projects",
      "en",
      "/services",
      false,
    );
    expect(getIsActiveSpy).toHaveBeenCalledWith(
      "/projects",
      "en",
      "/projects",
      false,
    );
    expect(getIsActiveSpy).toHaveBeenCalledWith(
      "/projects",
      "en",
      "/contact",
      false,
    );
  });
});
