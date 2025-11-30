import styled from "styled-components";
import home from "../assets/home.png";
import about from "../assets/about-bg.jpeg";
import Layout from "../components/Layout";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const About = () => {
  return (
    <Layout pageTitle="About" icon={home} bgImage={about}>
      <Container>
        LiftFitter is an international team of specialists focused on the
        installation, modernization, servicing, and dismantling of elevator and
        escalator equipment. We provide a complete turnkey service — from
        documentation and logistics to the final commissioning of the device. We
        operate in Poland, Germany, Spain, Denmark, the Netherlands, and other
        European countries, working with manufacturers such as Kleemann,
        Schindler, KONE, Orona, BKG, as well as various local brands. Why us? We
        complete all projects on time. We have highly experienced installation
        teams. We document every stage of the work and ensure full transparency.
        We work in accordance with EN81 standards, as well as local health &
        safety and UDT regulations. We adapt our solutions to the needs of each
        client. Our mission To deliver safe, reliable and durable elevator
        solutions while providing a professional installation and service
        process at the highest level.
      </Container>
    </Layout>
  );
};

export default About;
