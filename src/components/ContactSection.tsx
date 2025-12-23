import { useTranslation } from "react-i18next";
import { StyledTitle, TextBlock, TextSection } from "../common/styles";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const { t } = useTranslation("contactSection");

  return (
    <TextSection>
      <TextBlock>
        <StyledTitle>{t("contactSection:title")}</StyledTitle>
        <p>{t("contactSection:description")}</p>
      </TextBlock>
      <ContactForm />
    </TextSection>
  );
};

export default ContactSection;
