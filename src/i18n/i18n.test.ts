import { describe, it, expect, vi } from "vitest";
vi.mock("i18next-http-backend", () => ({
  default: {
    type: "backend",
    init: () => {},
    read: (
      _lng: string,
      _ns: string,
      callback: (err: unknown, data: unknown) => void
    ) => {
      callback(null, {});
    },
  },
}));

vi.mock("i18next-browser-languagedetector", () => ({
  default: {
    type: "languageDetector",
    init: () => {},
    detect: () => "en",
    cacheUserLanguage: () => {},
  },
}));

import i18n, { LANGS } from "./i18n";

describe("i18n Configuration", () => {
  it("export the correct list of supported languages", () => {
    expect(LANGS).toContain("en");
    expect(LANGS).toContain("de");
    expect(LANGS).toContain("pl");
    expect(LANGS).toHaveLength(3);
  });

  it("should be initialized with the correct fallback language (fallbackLng)", () => {
    expect(i18n.options.fallbackLng).toContain("en");
  });

  it("have disabled escaping (escapeValue: false) for React", () => {
    expect(i18n.options.interpolation?.escapeValue).toBe(false);
  });

  it("have the correct load path for the backend", () => {
    const backendOptions = i18n.options.backend as
      | { loadPath?: string }
      | undefined;
    expect(backendOptions?.loadPath).toBe("/locales/{{lng}}/{{ns}}.json");
  });

  it("use the correct language detection order", () => {
    const detectionOptions = i18n.options.detection;
    expect(detectionOptions?.order).toEqual(["localStorage", "navigator"]);
    expect(detectionOptions?.caches).toEqual(["localStorage"]);
  });

  it("successfully change the language (on manual call)", async () => {
    await i18n.changeLanguage("de");
    expect(i18n.language).toBe("de");
  });
});
