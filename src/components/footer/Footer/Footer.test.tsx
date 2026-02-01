import { describe, it, expect, vi } from "vitest";
import { render, screen } from "../../../test/test-utils";
import Footer from "./Footer";

vi.mock("../FooterMenu/FooterMenu", () => ({
  default: () => <nav data-testid="footer-menu">Footer menu</nav>,
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "footer:quickLinks": "Quick links",
        "footer:copyright": "All rights reserved",
      };
      return translations[key] ?? key;
    },
  }),
}));

describe("Footer", () => {
  it("renders brand logo with link", () => {
    render(<Footer />);

    const brandLink = screen.getByLabelText(/lift fitter home/i);
    expect(brandLink).toBeInTheDocument();
  });

  it("renders phone and email links", () => {
    render(<Footer />);

    const phoneLink = screen.getByText("+48 737974401");
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute("href", "tel:+48 737974401");

    const emailLink = screen.getByText("info@liftfitter.com");
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:info@liftfitter.com");
  });

  it("renders quick links title and footer menu", () => {
    render(<Footer />);

    expect(
      screen.getByRole("heading", { name: "Quick links" }),
    ).toBeInTheDocument();

    expect(screen.getByTestId("footer-menu")).toBeInTheDocument();
  });

  it("renders copyright with current year", () => {
    render(<Footer />);

    const year = new Date().getFullYear();

    expect(
      screen.getByText(`© ${year} Lift Fitter. All rights reserved`),
    ).toBeInTheDocument();
  });
});
