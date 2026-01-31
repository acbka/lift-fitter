import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { BrowserRouter } from "react-router";
import Footer from "./Footer";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "footer:quickLinks": "Quick Links",
        "footer:copyright": "All rights reserved",
      };
      return translations[key] || key;
    },
    i18n: {
      language: "en",
      changeLanguage: vi.fn(),
    },
  }),
}));

vi.mock("./FooterMenu", () => ({
  default: () => <nav data-testid="footer-menu">Footer Menu</nav>,
}));
vi.mock("../../assets/logo.svg", () => ({ default: "logo.svg" }));
vi.mock("../../assets/phone.svg", () => ({ default: "phone.svg" }));
vi.mock("../../assets/email.svg", () => ({ default: "email.svg" }));

const renderFooter = () => {
  return render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
  );
};

describe("Footer", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render without errors", () => {
    renderFooter();
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it("should display logo with correct attributes", () => {
    renderFooter();
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src");
  });

  it("should display logo link with aria-label", () => {
    renderFooter();
    const logoLink = screen.getByLabelText("Lift Fitter home");
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("should display phone number with tel: link", () => {
    renderFooter();
    const phoneLink = screen.getByRole("link", { name: /\+48 737974401/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute("href", "tel:+48 737974401");
  });

  it("should display email with mailto: link", () => {
    renderFooter();
    const emailLink = screen.getByRole("link", {
      name: /info@liftfitter.com/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:info@liftfitter.com");
  });

  it("should display phone and email icons", () => {
    renderFooter();
    const phoneIcon = screen.getByAltText("phone");
    const emailIcon = screen.getByAltText("eemail");
    expect(phoneIcon).toBeInTheDocument();
    expect(emailIcon).toBeInTheDocument();
  });

  it("should display Quick Links heading", () => {
    renderFooter();
    const title = screen.getByRole("heading", { name: /quick links/i });
    expect(title).toBeInTheDocument();
  });

  it("should render FooterMenu component", () => {
    renderFooter();
    const navigation = screen.getAllByRole("link");
    expect(navigation.length).toBeGreaterThan(2);
  });

  it("should display current year in copyright", () => {
    renderFooter();
    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(
      new RegExp(`© ${currentYear} Lift Fitter`, "i"),
    );
    expect(copyright).toBeInTheDocument();
  });

  it("should display translated copyright text", () => {
    renderFooter();
    const copyrightText = screen.getByText(/all rights reserved/i);
    expect(copyrightText).toBeInTheDocument();
  });

  it("should use correct translations via useTranslation", () => {
    const { container } = renderFooter();
    expect(container.textContent).toContain("Quick Links");
    expect(container.textContent).toContain("All rights reserved");
  });
});
