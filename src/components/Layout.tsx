import type { ReactNode } from "react";
import styled from "styled-components";
import type { Slide } from "../common/constants";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";

interface LayoutProps {
  pageTitle: string;
  icon: string;
  bgImage?: string;
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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

const Title = styled.div<{ bgImage?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: ${(props) => (props.bgImage ? "144px" : "48px")};
  background: ${(props) =>
    props.bgImage
      ? `linear-gradient(rgba(32, 46, 49, 0.7), rgba(32, 46, 49, 1)),
    url(${props.bgImage}) no-repeat center center/cover`
      : "var(--color-dark)"};
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

const Layout = ({
  children,
  icon,
  pageTitle,
  bgImage,
  sliders,
}: LayoutProps) => {
  return (
    <Container>
      <Header />
      <Main>
        {sliders ? <Slider slides={sliders} /> : null}
        <Title bgImage={bgImage}>
          <IconBlock>
            <img src={icon} alt={pageTitle} />
          </IconBlock>
          <h1>{pageTitle}</h1>
        </Title>
        {children}
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
