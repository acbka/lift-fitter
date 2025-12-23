import { useParams } from "react-router";
import { useTranslation, Trans } from "react-i18next";
import styled from "styled-components";
import { Content } from "../common/styles";
import { services } from "../common/services";
import ContactSection from "../components/ContactSection";
import Layout from "../components/Layout";

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

const ServiceInfo = () => {
  const { id } = useParams();

  const { t } = useTranslation("services");

  const service = services.find((item) => item.id === id);

  if (!service) return null;

  const sections = t(`services.${id}.details.sections`, {
    returnObjects: true,
  }) as { title: string; content: string }[];

  return (
    <>
      {service && (
        <Layout pageTitle={t(`services.${service.id}.title`)}>
          <Content>
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
          </Content>
          <ContactSection />
        </Layout>
      )}
    </>
  );
};

export default ServiceInfo;
