import { useTranslation } from "react-i18next";
import projectsBg from "../assets/projects-bg.jpg";
import projectsIcon from "../assets/projects.png";
import { CardsContainer } from "../common/styles";
import { projects } from "../common/projects";
import Card from "../components/Card";
import ContactSection from "../components/ContactSection";
import Layout from "../components/PageLayout";

const Projects = () => {
  const { t } = useTranslation(["projects", "common"]);

  return (
    <Layout
      pageTitle={t("projects.title")}
      icon={projectsIcon}
      bgImage={projectsBg}
    >
      <CardsContainer>
        {projects.map((project) => (
          <Card
            key={project.id}
            image={project?.image}
            pageKey="projects"
            itemId={project.id as string}
            buttonName={t("common:details")}
          />
        ))}
      </CardsContainer>
      <ContactSection />
    </Layout>
  );
};

export default Projects;
