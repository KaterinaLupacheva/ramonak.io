import { currentProjects } from '../../lib/currentProjects';
import CurrentProjectCard from '../CurrentProjectCard';
import { Title } from '../shared/styled';
import { CurrentProjectsContainer, ProjectsContainer } from './styles';

export default function CurrentProjects() {
  return (
    <CurrentProjectsContainer>
      <Title>Current Projects</Title>
      <ProjectsContainer>
        {currentProjects.map((project, idx) => (
          <CurrentProjectCard project={project} key={idx} />
        ))}
      </ProjectsContainer>
    </CurrentProjectsContainer>
  );
}
