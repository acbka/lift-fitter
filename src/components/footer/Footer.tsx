import { useTranslation } from "react-i18next";
import styled from "styled-components";
import email from "../../assets/email.svg";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone.svg";
import { Brand, LogoImage } from "../../common/styles";
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

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation("footer");

  return (
    <FooterWrapper>
      <FooterContent>
        <Container>
          <BrandLogo to="" aria-label="Lift Fitter home">
            <LogoImage src={logo} $isScrolled={true} alt="logo" />
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
          <StyledTitle>{t("footer:quickLinks")}</StyledTitle>
          <FooterMenu />
        </div>
      </FooterContent>
      <StyledParagraph>
        <span>
          © {year} Lift Fitter. {t("footer:copyright")}
        </span>
      </StyledParagraph>
    </FooterWrapper>
  );
};

export default Footer;
