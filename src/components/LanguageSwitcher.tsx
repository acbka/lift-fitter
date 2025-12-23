import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
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
    color: var(--color-yellow);
  }
`;

const LanguageSwitcher = () => {
  const LANGS = ["en", "pl", "de"] as const;
  type Language = (typeof LANGS)[number];

  const { lng } = useParams<{ lng: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang = lng ?? "en";
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang: Language) => {
    if (lang === currentLang) return;

    const newPath = location.pathname.replace(/^\/[^/]+/, `/${lang}`);

    navigate(newPath);
    setOpen(false);
  };

  return (
    <SwitcherWrapper>
      <LangButton onClick={() => setOpen((prev) => !prev)}>
        {currentLang.toUpperCase()}
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
