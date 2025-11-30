import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const HeaderWrapper = styled.header<{ isScrolled: boolean }>`
  min-height: 65px;
  padding: 16px 24px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.16);
  background-color: ${({ isScrolled }) =>
    isScrolled ? "var(--color-dark)" : "transparent"};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 1170px;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #111;
  font-weight: 700;
  font-size: 18px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 639px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-white);
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 14px;
`;

const CTA = styled.a`
  padding: 8px 12px;
  background: var(--color-yellow);
  color: var(--color-white);
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  margin-left: 8px;
`;

export const MobileButton = styled.button`
  display: none;
  border: none;
  background: transparent;
  padding: 8px;

  @media (max-width: 639px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenu = styled.nav<{ open?: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;

  @media (min-width: 640px) {
    display: none;
  }
`;
type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 640 : false;
  console.log("isMobile:", isMobile);

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <HeaderContent>
        <Brand href="/" aria-label="Lift Fitter home">
          <img src={logo} alt="logo" />
        </Brand>

        {isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <button
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                {open ? (
                  <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke="#FF0000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="#FF0000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>

            <MobileMenu open={open}>
              {navItems.map((n) => (
                <NavLink key={n.href} href={n.href}>
                  {n.label}
                </NavLink>
              ))}
              <CTA href="/contact">Request</CTA>
            </MobileMenu>
          </div>
        ) : (
          <Nav>
            {navItems.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
            <a href="/contact">Request</a>
          </Nav>
        )}
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
