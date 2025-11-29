import styled from "styled-components";
import home from "../assets/home.png";
import Layout from "../components/Layout";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Hero = styled.section`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto 40px;
`;

const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 30px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  color: #555;
  line-height: 1.6;
`;

const About = () => {
  return (
    <Layout pageName="About" icon={home}>
      <Container>
        <Hero>
          <Title>About LiftFitter</Title>
          <Subtitle>
            Professional lift installation and maintenance services for your
            building
          </Subtitle>
        </Hero>

        <Content>
          <Card>
            <CardTitle>Our Mission</CardTitle>
            <CardText>
              We provide reliable, efficient, and professional lift installation
              and repair services. Our experienced team ensures your elevators
              operate safely and smoothly.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Why Choose Us</CardTitle>
            <CardText>
              With over 15 years of experience, we deliver quality workmanship,
              quick response times, and competitive pricing. Your satisfaction
              is our priority.
            </CardText>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardTitle>Services</CardTitle>
            <CardText>
              • Lift Installation
              <br />
              • Maintenance & Repairs
              <br />
              • Modernization
              <br />• 24/7 Emergency Support
            </CardText>
          </Card>

          <Card>
            <CardTitle>Contact Us</CardTitle>
            <CardText>
              Ready to upgrade your building's lift system?
              <br />
              Call us today for a free consultation and quote.
            </CardText>
          </Card>
        </Content>
      </Container>
    </Layout>
  );
};

export default About;
