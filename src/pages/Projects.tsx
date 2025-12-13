import styled from "styled-components";
import projectsIcon from "../assets/projects.png";
import projectsBg from "../assets/projects-bg.jpg";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { projects } from "../common/constants";
import ContactSection from "../components/ContactSection";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
  padding: 24px 0;
  width: 100%;
  margin-bottom: 48px;
`;

export const Projects: React.FC = () => {
  return (
    <Layout pageTitle="Projects" icon={projectsIcon} bgImage={projectsBg}>
      <ProjectsContainer>
        {projects.map((project) => (
          <Card key={project.id} item={project}></Card>
        ))}
      </ProjectsContainer>
      <ContactSection />
    </Layout>
  );
};

export default Projects;
