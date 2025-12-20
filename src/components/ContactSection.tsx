import styled from "styled-components";
import { Section, StyledTitle, TextBlock } from "../common/styles";
import ContactForm from "./ContactForm";

const Paragraph = styled.p`
  padding: 24px 0;
`;

const ContactSection = () => {
  return (
    <Section>
      <TextBlock>
        <StyledTitle>Get all updates of our offers and promotions!</StyledTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua is a big.
        </Paragraph>
      </TextBlock>
      <ContactForm />
    </Section>
  );
};

export default ContactSection;
