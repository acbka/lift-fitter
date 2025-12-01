import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import NavBar from "./NavBar";

const HeaderWrapper = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "var(--color-dark)" : "transparent"};
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.16);
  width: 100%;
  min-height: 65px;
  padding: 16px 24px;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
`;

const LogoImage = styled.img<{ isScrolled: boolean }>`
  width: ${({ isScrolled }) => (isScrolled ? "207px" : "300px")};
  height: auto;
  transition: width 0.3s ease;
`;

const Header: React.FC = () => {
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
          <LogoImage src={logo} alt="logo" isScrolled={isScrolled} />
        </Brand>
        <NavBar />
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
