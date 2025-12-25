import { useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import servicesIcon from "../assets/services.png";
import servicesBg from "../assets/services-bg.jpg";
import {
  CardsContainer,
  StyledTitle,
  TextBlock,
  TextSection,
} from "../common/styles";
import { services, statistics } from "../common/services";
import { useInView } from "../hooks/useInView";
import Card from "../components/Card";
import ContactSection from "../components/ContactSection";
import Counter from "../components/Counter";
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
  gap: 3vw;
  color: var(--color-dark);
`;

const StatisticItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;

  & > h4 {
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 400;
    line-height: 52px;
    opacity: 0.7;
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
  background-color: var(--color-dark);
  text-align: center;
  border-radius: 50%;
`;

const Services = () => {
  const navigate = useNavigate();
  const { lng } = useParams<{ lng: string }>();
  const { t } = useTranslation(["services", "common"]);

  const { ref, isVisible } = useInView({
    threshold: 0.3,
  });

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
          <StatisticBlock ref={ref}>
            {statistics.map((statistic) => (
              <StatisticItem key={statistic.id}>
                <StatisticIcon>
                  <img src={statistic.icon} alt={statistic.id} />
                </StatisticIcon>
                <Counter
                  value={Number(t(`services:statistics.${statistic.id}.value`))}
                  start={isVisible}
                />
                <h4>{t(`services:statistics.${statistic.id}.label`)} </h4>
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
