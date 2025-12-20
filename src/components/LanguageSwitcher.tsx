import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const SwitcherWrapper = styled.div`
  position: relative;
  margin-left: auto;
`;

export const LangButton = styled.button`
  background: var(--color-yellow);
  color: var(--color-dark);
  border: none;
  padding: 12px 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--color-dark);
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 100;
`;

export const DropdownItem = styled.button<{ $active: boolean }>`
  background: transparent;
  border: none;
  color: ${({ $active }) => ($active ? "#ffffff" : "#cfcfcf")};
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  text-decoration: ${({ $active }) => ($active ? "underline" : "none")};

  &:hover {
    color: #ffffff;
  }
`;

const LanguageSwitcher: React.FC = () => {
  const LANGS = ["en", "pl", "de"] as const;
  type Language = (typeof LANGS)[number];

  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLang = (i18n.resolvedLanguage || i18n.language || "en").slice(
    0,
    2
  );

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <SwitcherWrapper>
      <LangButton onClick={() => setOpen((prev) => !prev)}>
        {currentLang?.toUpperCase()}
      </LangButton>

      {open && (
        <Dropdown>
          {LANGS.map((lang) => (
            <DropdownItem
              key={lang}
              $active={lang === currentLang}
              onClick={() => changeLanguage(lang)}
            >
              {lang.toUpperCase()}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </SwitcherWrapper>
  );
};

export default LanguageSwitcher;
