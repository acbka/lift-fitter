import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { StyledTitle } from "../common/styles";
import ContactForm from "./ContactForm";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1170px;
  padding: 24px;
  margin: 0 auto;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2em;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > p {
    padding: 24px 0;
  }

  @media (min-width: 768px) {
    flex: 1;
    text-align: left;
  }
`;

const ContactSection = () => {
  const { t } = useTranslation("contactSection");

  return (
    <Section>
      <TextBlock>
        <StyledTitle>{t("contactSection:title")}</StyledTitle>
        <p>{t("contactSection:description")}</p>
      </TextBlock>
      <ContactForm />
    </Section>
  );
};

export default ContactSection;
