import styled from "styled-components";
import { menuItems } from "../common/constants";
import { StyledLink } from "./NavBar";

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  column-gap: 16px;
`;

const MenuItem = styled(StyledLink)`
  padding: 8px 16px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-bottom-width: 8px;
    border-top-width: 8px;
    border-left: 8px solid var(--color-yellow);
  }
`;

const FooterMenu: React.FC = () => {
  return (
    <Menu>
      {menuItems.map((item) => (
        <MenuItem key={item.label} to={item.link}>
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};
export default FooterMenu;
