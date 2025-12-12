import homeIcon from "../assets/home.png";
import team from "../assets/team.jpeg";
import about from "../assets/about-bg.jpeg";
import Layout from "../components/Layout";
import { Section, TextBlock, StyledImage } from "../common/styles";
import ContactSection from "../components/ContactSection";

const About = () => {
  return (
    <Layout pageTitle="About" icon={homeIcon} bgImage={about}>
      <Section>
        <TextBlock>
          LiftFitter is an international team of specialists focused on the
          installation, modernization, servicing, and dismantling of elevator
          and escalator equipment. We provide a complete turnkey service — from
          documentation and logistics to the final commissioning of the device.
          We operate in Poland, Germany, Spain, Denmark, the Netherlands, and
          other European countries, working with manufacturers such as Kleemann,
          Schindler, KONE, Orona, BKG, as well as various local brands. Why us?
          We complete all projects on time. We have highly experienced
          installation teams. We document every stage of the work and ensure
          full transparency. We work in accordance with EN81 standards, as well
          as local health & safety and UDT regulations. We adapt our solutions
          to the needs of each client. Our mission To deliver safe, reliable and
          durable elevator solutions while providing a professional installation
          and service process at the highest level.
        </TextBlock>
        <StyledImage src={team} alt="team" />
      </Section>
      <ContactSection />
    </Layout>
  );
};

export default About;
