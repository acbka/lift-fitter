import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { Brand, LogoImage } from "../../common/styles";
import NavBar from "./NavBar";

const HeaderWrapper = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-dark);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.16);
  width: 100%;
  min-height: 65px;
  padding: 16px 24px;
  z-index: 100;

  @media (min-width: 992px) {
    background-color: ${({ $isScrolled }) =>
      $isScrolled ? "rgba(32, 46, 49, 0.9)" : "var(--color-dark)"};
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderWrapper $isScrolled={isScrolled}>
      <HeaderContent>
        <Brand to="" aria-label="Lift Fitter home">
          <LogoImage src={logo} alt="logo" $isScrolled={isScrolled} />
        </Brand>
        <NavBar />
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
