import { useState } from "react";
import { Navigate, useLocation, useParams } from "react-router";
import { useTranslation, Trans } from "react-i18next";
import styled from "styled-components";
import type { ProjectType, ServiceType } from "../common/constants";
import { projects } from "../common/projects";
import { services } from "../common/services";
import { Section } from "../common/styles";
import ContactSection from "../components/ContactSection";
import GalleryModal from "../components/GalleryModal";
import Title from "../components/Title";

type DetailItem = ServiceType | ProjectType;

const StyledImage = styled.img`
  padding: 24px 0;
  width: 100%;

  @media (min-width: 576px) {
    max-width: 1170px;
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const GalleryImage = styled.img`
  width: 360px;
  height: auto;
`;

const Paragraph = styled.div`
  padding: 24px 0;
  & > p {
    padding-bottom: 16px;
  }
`;

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const isService = location.pathname.includes("/services");
  const namespace = isService ? "services" : "projects";

  const { t } = useTranslation(namespace);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!id) return <Navigate to={`../${namespace}`} replace />;

  const data: DetailItem[] = isService ? services : projects;
  const item = data.find((item) => item.id === id);

  const images = (item as ProjectType).galleryImages ?? [];

  if (!item) {
    return <Navigate to={`../${namespace}`} replace />;
  }

  const sections = t(`${namespace}.${id}.details.sections`, {
    returnObjects: true,
  }) as { title: string; content: string }[];

  const itemImage = isService
    ? (item as ServiceType).image
    : (item as ProjectType).galleryImages?.[0]?.image;

  return (
    <>
      <Title pageTitle={t(`${namespace}.${id}.title`)} />
      <Section>
        {itemImage && (
          <StyledImage src={itemImage} alt={t(`${namespace}.${id}.title`)} />
        )}

        <Paragraph>
          <Trans
            ns={namespace}
            i18nKey={`${namespace}.${id}.details.intro`}
            components={{ strong: <strong />, u: <u /> }}
          />
        </Paragraph>

        {sections &&
          sections.map((section, idx) => (
            <section key={idx}>
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </section>
          ))}

        {!isService && (item as ProjectType).galleryImages && (
          <Gallery>
            {images.map((slide, idx) => (
              <GalleryImage
                key={slide.id || idx}
                src={slide.image}
                alt={`${item.title} - ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </Gallery>
        )}

        {activeIndex !== null && (
          <GalleryModal
            images={images}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            onChange={setActiveIndex}
          />
        )}
      </Section>

      <ContactSection />
    </>
  );
};

export default Details;
