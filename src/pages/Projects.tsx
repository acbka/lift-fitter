import styled from "styled-components";
import projectsIcon from "../assets/projects.png";
import projectsBg from "../assets/projects-bg.jpg";
import Layout from "../components/Layout";

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const ProjectsTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectCardContent = styled.div`
  padding: 24px;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 12px;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const Projects: React.FC = () => {
  const projectsData = [
    {
      id: 1,
      title: "Project One",
      description: "Description for your first project.",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Description for your second project.",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Description for your third project.",
    },
  ];

  return (
    <Layout pageTitle="Projects" icon={projectsIcon} bgImage={projectsBg}>
      <ProjectsContainer>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsGrid>
          {projectsData.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectCardContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectCardContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </Layout>
  );
};

export default Projects;
