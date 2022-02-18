import { currentProjects } from '../../lib/currentProjects';
import CurrentProjectCard from '../CurrentProjectCard';
import SeeAll from '../SeeAll';
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
      <SeeAll label="Projects" href="/projects" />
    </CurrentProjectsContainer>
  );
}
