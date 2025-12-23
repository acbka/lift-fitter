import { useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import servicesIcon from "../assets/services.png";
import servicesBg from "../assets/services-bg.jpg";
import {
  CardsContainer,
  TextSection,
  TextBlock,
  StyledTitle,
} from "../common/styles";
import { services, statistics } from "../common/services";
import Card from "../components/Card";
import ContactSection from "../components/ContactSection";
import Title from "../components/Title";

const Section = styled.div`
  background-color: var(--color-white);
`;

const StyledTextBlock = styled(TextBlock)`
  color: var(--color-dark);
`;

const StatisticBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6vw;
  color: var(--color-dark);
`;

const StatisticItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 16px;

  & > h4 {
    margin-bottom: 5px;
    font-size: 36px;
    font-weight: 400;
    line-height: 52px;
  }
`;

const StatisticIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 16px;
  padding: 15px;
  line-height: 50px;
  background-color: #141c1e;
  text-align: center;
  border-radius: 50%;
`;

const Services = () => {
  const navigate = useNavigate();
  const { lng } = useParams<{ lng: string }>();
  const { t } = useTranslation(["services", "common"]);

  return (
    <>
      <Title
        pageTitle={t("services.title")}
        icon={servicesIcon}
        bgImage={servicesBg}
      />
      <CardsContainer>
        {services.map((service) => (
          <Card
            key={service.id}
            image={service?.image}
            pageKey="services"
            itemId={service.id as string}
            buttonName={t("common:details")}
            handleClick={() => {
              navigate(`/${lng}/services/${service.id}`);
            }}
          ></Card>
        ))}
      </CardsContainer>
      <Section>
        <TextSection>
          <StyledTextBlock>
            <StyledTitle>{t("services:statistics.title")}</StyledTitle>
          </StyledTextBlock>
          <StatisticBlock>
            {statistics.map((statistic) => (
              <StatisticItem key={statistic.id}>
                <StatisticIcon>
                  <img src={statistic.icon} alt={statistic.id} />
                </StatisticIcon>
                <h4>{t(`services:statistics.${statistic.id}.value`)} </h4>
                <p>{t(`services:statistics.${statistic.id}.label`)}</p>
              </StatisticItem>
            ))}
          </StatisticBlock>
        </TextSection>
      </Section>
      <ContactSection />
    </>
  );
};

export default Services;
