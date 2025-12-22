import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { menuItems } from "../../common/constants";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "../LanguageSwitcher";

const NavBarContent = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-white);
  padding: 8px 12px;

  &.active {
    color: var(--color-yellow);
    border-bottom: 2px solid var(--color-yellow);
  }

  &:hover {
    color: var(--color-yellow);
  }
`;

const NavBar: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number | undefined>(undefined);
  const { t } = useTranslation("nav");

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowSize && windowSize > 992 ? (
        <NavBarContent>
          <Nav>
            {menuItems.map((item) => (
              <StyledLink key={item.link} to={item.link}>
                {t(item.labelKey)}
              </StyledLink>
            ))}
            <LanguageSwitcher />
          </Nav>
        </NavBarContent>
      ) : (
        <MobileMenu />
      )}
    </>
  );
};
export default NavBar;
