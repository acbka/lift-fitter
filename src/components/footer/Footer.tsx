import React from "react";
import styled from "styled-components";
import email from "../../assets/email.svg";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone.svg";
import { Brand } from "../../common/styles";
import FooterMenu from "./FooterMenu";

const FooterWrapper = styled.footer`
  background-color: var(--color-dark);
  color: var(--color-white);
  width: 100%;
  padding: 64px 24px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1170px;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const BrandLogo = styled(Brand)`
  margin-bottom: 16px;
`;

const LogoImage = styled.img`
  width: 207px;
  height: auto;
`;

const IconBlock = styled.div`
  display: flex;
  margin: 8px 0;
  align-items: center;
`;

const StyledIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

const StyledTitle = styled.h2`
  width: auto;
  margin-bottom: 8px;
  padding: 0 8px 8px 0px;
  border-bottom: 2px solid var(--color-yellow);
`;

const StyledParagraph = styled.p`
  width: 100%;
  text-align: center;
  opacity: 0.8;
  margin-top: 48px;
`;

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <Container>
          <BrandLogo href="/" aria-label="Lift Fitter home">
            <LogoImage src={logo} alt="logo" />
          </BrandLogo>
          <IconBlock>
            <StyledIcon src={phone} alt="phone" />
            <a href="tel:+48 737974401">+48 737974401</a>
          </IconBlock>
          <IconBlock>
            <StyledIcon src={email} alt="eemail" />
            <a href="mailto:info@liftfitter.com">info@liftfitter.com</a>
          </IconBlock>
        </Container>

        <div>
          <StyledTitle>Quick links</StyledTitle>
          <FooterMenu />
        </div>
      </FooterContent>
      <StyledParagraph>
        <span>© {year} Lift Fitter. All rights reserved.</span>
      </StyledParagraph>
    </FooterWrapper>
  );
};

export default Footer;
