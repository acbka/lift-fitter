import { useState } from "react";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { menuItems } from "../../common/constants";
import { getIsActive } from "../../utils/getIsActive";
import LanguageSwitcher from "../LanguageSwitcher";
import { StyledLink } from "./NavBar";

const NavBarContent = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-dark);
  align-items: center;
  position: absolute;
  top: 80px;
  left: 0;
  padding: 16px 0 20px 0;
  width: calc(100vw - 80px);
  z-index: 10;
  transition: transform 0.3s ease;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "80" : "-100%")});
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50px;
  height: 50px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-left: 8px;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;

const BurgerLine = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  height: 2px;
  background: var(--color-white);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;

  &:nth-child(1) {
    transform: ${(p) =>
      p.$isOpen ? "translateY(7px) rotate(45deg)" : "translateY(0) rotate(0)"};
  }

  &:nth-child(2) {
    opacity: ${(p) => (p.$isOpen ? 0 : 1)};
    transform: ${(p) => (p.$isOpen ? "translateX(-28px)" : "translateX(0)")};
  }

  &:nth-child(3) {
    transform: ${(p) =>
      p.$isOpen
        ? "translateY(-16px) rotate(-45deg)"
        : "translateY(0) rotate(0)"};
  }
`;

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const { i18n, t } = useTranslation();

  return (
    <>
      <LanguageSwitcher />
      <BurgerButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <BurgerLine $isOpen={isOpen} />
        <BurgerLine $isOpen={isOpen} />
        <BurgerLine $isOpen={isOpen} />
      </BurgerButton>
      <NavBarContent $isOpen={isOpen}>
        <Nav $isOpen={isOpen}>
          {menuItems.map((item) => (
            <StyledLink
              key={item.link}
              to={item.link}
              onClick={() => setIsOpen(false)}
              $isActive={Boolean(
                getIsActive(
                  location.pathname,
                  i18n.language,
                  item.link,
                  item.exact
                )
              )}
            >
              {t(item.labelKey)}
            </StyledLink>
          ))}
        </Nav>
      </NavBarContent>
    </>
  );
};

export default MobileMenu;
