import { vi } from "vitest";
import "@testing-library/jest-dom";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "nav:home": "Home",
        "nav:about": "About",
        "nav:services": "Services",
        "nav:projects": "Projects",
        "nav:contact": "Contact",
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
  initReactI18next: {
    type: "3rdParty",
    init: vi.fn(),
  },
  Trans: ({ children }: { children: React.ReactNode }) => children,
  Translation: ({
    children,
  }: {
    children: (t: (key: string) => string) => React.ReactNode;
  }) => children((key: string) => key),
}));

vi.mock("*.svg", () => ({
  default: "mocked-svg-path",
}));

vi.mock("./src/common/constants", () => ({
  menuItems: [
    { link: "/", labelKey: "nav:home", exact: true },
    { link: "/about", labelKey: "nav:about", exact: false },
    { link: "/services", labelKey: "nav:services", exact: false },
    { link: "/projects", labelKey: "nav:projects", exact: false },
    { link: "/contact", labelKey: "nav:contact", exact: false },
  ],
}));
