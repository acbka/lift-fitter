import { useTranslation } from "react-i18next";
import styled from "styled-components";
import about from "../assets/about-bg.jpeg";
import homeIcon from "../assets/home.png";
import team from "../assets/team.jpeg";
import { partners } from "../common/constants";
import { StyledImage, CardsContainer, Section } from "../common/styles";
import ContactSection from "../components/ContactSection";
import PartnerCard from "../components/PartnerCard";
import Title from "../components/Title";

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
  const { t } = useTranslation("about");

  const sections = t(`sections`, {
    returnObjects: true,
  }) as { title: string; content: string }[];

  return (
    <>
      <Title pageTitle={t("title")} icon={homeIcon} bgImage={about} />
      <Section>
        <StyledImage src={team} alt={t("teamAlt")} />
        {sections.map((section, idx) => (
          <section key={idx}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </section>
        ))}
      </Section>
      <PartnersSection>
        <h2>{t("partners.title")}</h2>
        <PartnersContainer>
          {partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </PartnersContainer>
      </PartnersSection>
      <ContactSection />
    </>
  );
};

export default About;
