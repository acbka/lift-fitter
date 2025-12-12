import { useState } from "react";
import styled from "styled-components";
import { menuItems } from "../common/constants";
import { CTA, StyledLink } from "./NavBar";

const NavBarContent = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-dark);
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0;
  padding: 97px 0 20px 0;
  width: calc(100vw - 80px);
  z-index: 10;
  transition: transform 0.3s ease;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
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

  return (
    <>
      <BurgerButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <BurgerLine $isOpen={isOpen} />
        <BurgerLine $isOpen={isOpen} />
        <BurgerLine $isOpen={isOpen} />
      </BurgerButton>
      <NavBarContent $isOpen={isOpen}>
        <Nav $isOpen={isOpen}>
          {menuItems.map((item) => (
            <StyledLink key={item.label} to={item.link}>
              {item.label}
            </StyledLink>
          ))}
          <CTA to="/contacts">Request</CTA>
        </Nav>
      </NavBarContent>
    </>
  );
};

export default MobileMenu;
