import { Navigate, useParams } from "react-router";
import { useTranslation, Trans } from "react-i18next";
import styled from "styled-components";
import { Section } from "../common/styles";
import { services } from "../common/services";
import ContactSection from "../components/ContactSection";
import Title from "../components/Title";

const StyledImage = styled.img`
  padding: 24px 0;
  width: 100%;

  @media (min-width: 576px) {
    max-width: 1170px;
  }
`;

const Paragraph = styled.div`
  padding: 24px 0;
  & > p {
    padding-bottom: 16px;
  }
`;

const Details = () => {
  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation("services");

  if (!id) return null;

  const service = services.find((item) => item.id === id);

  if (!service) return null;

  const sections = t(`services.${id}.details.sections`, {
    returnObjects: true,
  }) as { title: string; content: string }[];

  if (!services.find((s) => s.id === id)) {
    return <Navigate to="../services" replace />;
  }

  return (
    <>
      {service && (
        <>
          <Title pageTitle={t(`services.${service.id}.title`)} />
          <Section>
            <StyledImage
              src={service.image}
              alt={t(`services.${service.id}.title`)}
            />
            <Paragraph>
              <Trans
                ns="services"
                i18nKey={`services.${service.id}.details.intro`}
                components={{ strong: <strong />, u: <u /> }}
              />
            </Paragraph>
            {sections.map((section, idx) => (
              <section key={idx}>
                <h3>{section.title}</h3>
                <p>{section.content}</p>
              </section>
            ))}
          </Section>
          <ContactSection />
        </>
      )}
    </>
  );
};

export default Details;
