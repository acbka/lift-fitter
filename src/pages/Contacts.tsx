import styled from "styled-components";
import contactsIcon from "../assets/contacts.png";
import contactsBg from "../assets/contacts-bg.jpeg";
import Layout from "../components/Layout";

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Content = styled.div`
  font-size: 18px;
  line-height: 1.8;
  color: var(--color-gray);
`;

const FloatingImage = styled.img`
  float: none;
  width: 100%;
  margin: 0 0 20px 0;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    float: right;
    width: 45%;
    max-width: 500px;
    margin: 0 0 20px 40px;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
`;

const FormSection = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 30px;
  max-width: 500px;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

const Button = styled.button`
  background: #0066cc;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #0052a3;
  }
`;

export const Contacts = () => {
  return (
    <Layout pageTitle="Contacts" icon={contactsIcon} bgImage={contactsBg}>
      <Container>
        <Title>Contact Us</Title>
        <Content>
          <FloatingImage
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
            alt="Modern elevator"
          />
          <Paragraph>
            With over 15 years of experience in the elevator industry, we
            provide comprehensive solutions for residential, commercial, and
            industrial properties. Our commitment to excellence and safety has
            made us a trusted partner for building owners and property managers.
          </Paragraph>
          <Paragraph>
            Our team of certified technicians ensures your vertical
            transportation systems operate safely and efficiently. We offer 24/7
            emergency support, preventive maintenance programs, and complete
            modernization services for aging equipment.
          </Paragraph>
        </Content>
        <FormSection>
          <FormTitle>Send us a Message</FormTitle>
          <form>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Your name" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="your@email.com" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" rows={5} placeholder="Your message..." />
            </FormGroup>

            <Button type="submit">Send Message</Button>
          </form>
        </FormSection>
      </Container>
    </Layout>
  );
};

export default Contacts;
