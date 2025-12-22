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

const expertiseItems = [
  "expertise.item1",
  "expertise.item2",
  "expertise.item3",
  "expertise.item4",
] as const;

const whyUsBlocks = [
  "delivery",
  "experience",
  "transparency",
  "safety",
  "tailored",
] as const;

const About: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <Layout pageTitle={t("title")} icon={homeIcon} bgImage={about}>
      <Content>
        <StyledImage src={team} alt={t("teamAlt")} />

        <p>{t("intro")}</p>

        <h2>{t("expertise.title")}</h2>
        <ul>
          {expertiseItems.map((key) => (
            <li key={key}>{t(`expertise.${key.split(".")[1]}`)}</li>
          ))}
        </ul>

        <p>{t("turnkey")}</p>

        <h2>{t("reach.title")}</h2>
        <p>{t("reach.description")}</p>

        <h2>{t("whyUs.title")}</h2>

        {whyUsBlocks.map((block) => (
          <section key={block}>
            <h3>{t(`whyUs.${block}.title`)}</h3>
            <p>{t(`whyUs.${block}.description`)}</p>
          </section>
        ))}

        <h2>{t("mission.title")}</h2>
        <p>{t("mission.description")}</p>
      </Content>

      <PartnersSection>
        <StyledTitle>{t("partners.title")}</StyledTitle>
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
