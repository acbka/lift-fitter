import styled from "styled-components";
import contactsIcon from "../assets/contacts.png";
import contactsBg from "../assets/contacts-bg.jpeg";
import Layout from "../components/Layout";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    sans-serif;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const ContactCard = styled.div`
  background: #f5f5f5;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #222;
`;

const ContactInfo = styled.p`
  font-size: 14px;
  color: #666;
  margin: 8px 0;
  line-height: 1.6;
`;

const Link = styled.a`
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
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

        <ContactGrid>
          <ContactCard>
            <CardTitle>Email</CardTitle>
            <ContactInfo>
              <Link href="mailto:support@liftfitter.com">
                support@liftfitter.com
              </Link>
            </ContactInfo>
          </ContactCard>

          <ContactCard>
            <CardTitle>Phone</CardTitle>
            <ContactInfo>
              <Link href="tel:+1234567890">+1 (234) 567-890</Link>
            </ContactInfo>
          </ContactCard>

          <ContactCard>
            <CardTitle>Address</CardTitle>
            <ContactInfo>
              123 Fitness Street
              <br />
              Gym City, GC 12345
              <br />
              United States
            </ContactInfo>
          </ContactCard>
        </ContactGrid>

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
