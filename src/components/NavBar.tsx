import { Link } from "react-router";
import styled from "styled-components";

const NavBarContent = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 639px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
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

const CTA = styled.a`
  padding: 8px 16px;
  background: var(--color-white);
  color: var(--color-dark);
  border-radius: 2px;
  text-decoration: none;
  margin-left: 8px;
`;
const NavBar: React.FC = () => {
  return (
    <NavBarContent>
      <Nav>
        <StyledLink to="/ end">Home</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
      </Nav>
      <CTA href="/contacts">Request</CTA>
    </NavBarContent>
  );
};

export default NavBar;
