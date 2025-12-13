import projectsIcon from "../assets/projects.png";
import projectsBg from "../assets/projects-bg.jpg";
import { CardsContainer } from "../common/styles";
import { projects } from "../common/constants";
import Card from "../components/Card";
import ContactSection from "../components/ContactSection";
import Layout from "../components/Layout";

export const Projects: React.FC = () => {
  return (
    <Layout pageTitle="Projects" icon={projectsIcon} bgImage={projectsBg}>
      <CardsContainer>
        {projects.map((project) => (
          <Card key={project.id} item={project}></Card>
        ))}
      </CardsContainer>
      <ContactSection />
    </Layout>
  );
};

export default Projects;
