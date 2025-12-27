import { useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import projectsBg from "../assets/projects-bg.jpg";
import projectsIcon from "../assets/projects.png";
import { CardsContainer } from "../common/styles";
import { projects } from "../common/projects";
import Card from "../components/Card";
import ContactSection from "../components/ContactSection";
import Title from "../components/Title";

const Projects = () => {
  const navigate = useNavigate();
  const { lng } = useParams<{ lng: string }>();
  const { t } = useTranslation(["projects", "common"]);

  return (
    <>
      <Title
        pageTitle={t("projects.title")}
        icon={projectsIcon}
        bgImage={projectsBg}
      />
      <CardsContainer>
        {projects.map((project) => (
          <Card
            key={project.id}
            galleryImages={
              project?.galleryImages ? [...project.galleryImages] : undefined
            }
            pageKey="projects"
            itemId={project.id as string}
            buttonName={t("common:details")}
            handleClick={() => {
              navigate(`/${lng}/projects/${project.id}`);
            }}
          />
        ))}
      </CardsContainer>
      <ContactSection />
    </>
  );
};

export default Projects;
