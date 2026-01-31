import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { menuItems } from "../../../common/constants";
import MobileMenu from "../MobileMenu/MobileMenu";
import LanguageSwitcher from "../../LanguageSwitcher";
import { getIsActive } from "../../../utils/getIsActive";

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

export const StyledLink = styled(NavLink)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${(props) =>
    props.$isActive ? "var(--color-yellow)" : "var(--color-white)"};
  padding: 8px 12px;

  &.hover {
    color: var(--color-yellow);
  }

  &:active {
    text-decoration: none;
  }
`;

const NavBar = () => {
  const [windowSize, setWindowSize] = useState<number | undefined>(undefined);

  const { t, i18n } = useTranslation("nav");
  const location = useLocation();

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
              <StyledLink
                key={item.link}
                to={item.link}
                $isActive={Boolean(
                  getIsActive(
                    location.pathname,
                    i18n.language,
                    item.link,
                    item.exact,
                  ),
                )}
              >
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
