import React from "react";
import homeIcon from "../assets/home.png";
import home from "../assets/home.jpeg";
import { StyledImage, Paragraph, Content } from "../common/styles";
import Layout from "../components/Layout";
import { sliders } from "../common/constants";

const Home: React.FC = () => {
  return (
    <Layout pageTitle="Home" icon={homeIcon} sliders={sliders}>
      <Content>
        <StyledImage src={home} alt="home" />
        <Paragraph>
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
        </Paragraph>
      </Content>
    </Layout>
  );
};

export default Home;
