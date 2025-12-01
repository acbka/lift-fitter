import { Link } from "react-router";
import styled from "styled-components";
import { menuItems } from "../common/constants";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

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
  padding: 8px 10px;

  &.active {
    color: var(--color-yellow);
    border-bottom: 2px solid var(--color-yellow);
  }

  &:hover {
    color: var(--color-yellow);
  }
`;

export const CTA = styled(Link)`
  padding: 8px 16px;
  background: var(--color-white);
  color: var(--color-dark);
  border-radius: 2px;
  text-decoration: none;
  margin-left: 8px;
`;

const NavBar: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number | undefined>(undefined);

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
      {windowSize && windowSize > 920 ? (
        <NavBarContent>
          <Nav>
            {menuItems.map((item) => (
              <StyledLink key={item.label} to={item.link}>
                {item.label}
              </StyledLink>
            ))}
            <CTA to="/contacts">Request</CTA>
          </Nav>
        </NavBarContent>
      ) : (
        <MobileMenu />
      )}
    </>
  );
};
export default NavBar;
