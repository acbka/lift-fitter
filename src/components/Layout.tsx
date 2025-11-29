import type { ReactNode } from "react";
import styled from "styled-components";
import type { Slide } from "../common/constants";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";

interface LayoutProps {
  pageName: string;
  icon: string;
  sliders?: Slide[];
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #202e31;
  color: var(--color-white);
  min-height: 100vh;
  width: 100vw;
  position: relative;
`;

const Main = styled.main<{ isSlader?: boolean }>`
  padding-top: ${(props) => (props.isSlader ? "0" : "120px")};
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const Title = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 48px 0;
`;

const IconBlock = styled.div`
  display: inline-block;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translate(-100%, -50%);
    display: block;
    width: 50px;
    height: 2px;
    background-color: var(--color-white);
  }
  &::after {
    content: "";
    position: absolute;
    right: -110px;
    top: 50%;
    transform: translate(-100%, -50%);
    display: block;
    width: 50px;
    height: 2px;
    background-color: var(--color-white);
  }
`;

const Layout = ({ children, icon, pageName, sliders }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <Main isSlader={sliders ? true : false}>
        {sliders ? <Slider slides={sliders} /> : null}
        <Title>
          <IconBlock>
            <img src={icon} alt={pageName} />
          </IconBlock>
          <h1>{pageName}</h1>
          {children}
        </Title>
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
