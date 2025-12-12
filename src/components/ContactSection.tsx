import styled from "styled-components";
import { Section, TextBlock } from "../common/styles";
import ContactForm from "./ContactForm";

const StyledTitle = styled.h2`
  font-size: 30px;
  line-height: 39px;
  font-weight: 600;
  text-align: center;

  @media (min-width: 576px) {
    text-align: left;
  }
`;

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
