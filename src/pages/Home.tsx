import React from "react";
import styled from "styled-components";
import home from "../assets/home.png";
import team from "../assets/team.png";
import Layout from "../components/Layout";
import { sliders } from "../common/constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #202e31;
`;

const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1170px;
  padding: 0 24px;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  margin-right: 48px;
  line-height: 2em;
  text-align: left;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  float: right;
  margin: 0 0 20px 20px;
`;

const Home: React.FC = () => {
  return (
    <Layout pageTitle="Home" icon={home} sliders={sliders}>
      <Wrapper>
        <MainSection>
          <Paragraph>
            LiftFitter is an international team of specialists focused on the
            installation, modernization, servicing, and dismantling of elevator
            and escalator equipment. We provide a complete turnkey service —
            from documentation and logistics to the final commissioning of the
            device. We operate in Poland, Germany, Spain, Denmark, the
            Netherlands, and other European countries, working with
            manufacturers such as Kleemann, Schindler, KONE, Orona, BKG, as well
            as various local brands. Why us? We complete all projects on time.
            We have highly experienced installation teams. We document every
            stage of the work and ensure full transparency. We work in
            accordance with EN81 standards, as well as local health & safety and
            UDT regulations. We adapt our solutions to the needs of each client.
            Our mission To deliver safe, reliable and durable elevator solutions
            while providing a professional installation and service process at
            the highest level.
          </Paragraph>
          <Image src={team} alt="team" />
        </MainSection>
      </Wrapper>
    </Layout>
  );
};

export default Home;
