import { useTranslation } from "react-i18next";
import styled from "styled-components";
import homeIcon from "../assets/home.png";
import team from "../assets/team.jpeg";
import about from "../assets/about-bg.jpeg";
import { partners } from "../common/constants";
import Layout from "../components/Layout";
import {
  StyledImage,
  StyledTitle,
  CardsContainer,
  Content,
} from "../common/styles";
import ContactSection from "../components/ContactSection";
import PartnerCard from "../components/PartnerCard";

const PartnersSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
  padding: 24px;
  background-color: #fff;

  & > h2 {
    color: #2e3d41;
    padding: 48px 0 24px 0;
  }

  @media (min-width: 1170px) {
    width: 100%;
  }
`;

const PartnersContainer = styled(CardsContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1170px;
`;

const About = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle={t("about.title")} icon={homeIcon} bgImage={about}>
      <Content>
        <StyledImage src={team} alt="team" />
        <p>{t("about.intro")}</p>
        <h2>{t("about.expertise.title")}</h2>
        <ul>
          <li>{t("about.expertise.item1")}</li>
          <li>{t("about.expertise.item2")}</li>
          <li>{t("about.expertise.item3")}</li>
          <li>{t("about.expertise.item4")}</li>
        </ul>
        <p>{t("about.turnkey")}</p>
        <h2>{t("about.reach.title")}</h2>
        <p>{t("about.reach.description")}</p>
        <h2>{t("about.whyUs.title")}</h2>
        <h3>{t("about.whyUs.delivery.title")}</h3>
        <p>{t("about.whyUs.delivery.description")}</p>
        <h3>{t("about.whyUs.experience.title")}</h3>
        <p>{t("about.whyUs.experience.description")}</p>
        <h3>{t("about.whyUs.transparency.title")}</h3>
        <p>{t("about.whyUs.transparency.description")}</p>
        <h3>{t("about.whyUs.safety.title")}</h3>
        <p>{t("about.whyUs.safety.description")}</p>
        <h3>{t("about.whyUs.tailored.title")}</h3>
        <p>{t("about.whyUs.tailored.description")}</p>
        <h2>{t("about.mission.title")}</h2>
        <p>{t("about.mission.description")}</p>
      </Content>

      <PartnersSection>
        <StyledTitle>Our Partners</StyledTitle>
        <PartnersContainer>
          {partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </PartnersContainer>
      </PartnersSection>

      <ContactSection />
    </Layout>
  );
};

export default About;
