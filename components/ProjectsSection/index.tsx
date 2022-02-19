import { commercialProjects } from '../../lib/projects';
import ProjectCard from '../ProjectCard';
import { Title } from '../shared/styled';
import { CardsContainer, ProjectsSectionContainer } from './styles';

export default function ProjectsSection() {
  return (
    <ProjectsSectionContainer>
      <Title>Commercial Projects</Title>
      <CardsContainer>
        {commercialProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </CardsContainer>
    </ProjectsSectionContainer>
  );
}
