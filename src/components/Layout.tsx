import type { ReactNode } from "react";
import styled from "styled-components";
import type { Slide } from "../common/constants";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";

type LayoutProps = {
  pageTitle: string;
  icon: string;
  bgImage?: string;
  sliders?: Slide[];
  children: ReactNode;
};

const Container = styled.div`
  background: var(--color-dark);
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  width: 100vw;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.div<{ $bgImage?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: ${({ $bgImage }) => ($bgImage ? "144px" : "48px")};
  background: ${({ $bgImage }) =>
    $bgImage
      ? `linear-gradient(rgba(32, 46, 49, 0.7), rgba(32, 46, 49, 1)),
    url(${$bgImage}) no-repeat center center/cover`
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

const ContentBlock = styled.div`
  max-width: 1170px;
  margin: 0 auto;
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
        <Title $bgImage={bgImage}>
          <IconBlock>
            <img src={icon} alt={pageTitle} />
          </IconBlock>
          <h1>{pageTitle}</h1>
        </Title>
        <ContentBlock>{children}</ContentBlock>
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
