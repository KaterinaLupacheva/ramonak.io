import { currentProjects } from '../../lib/currentProjects';
import CurrentProjectCard from '../CurrentProjectCard';
import SeeAll from '../SeeAll';
import { Title } from '../shared/styled';
import { CurrentProjectsContainer } from './styles';

export default function CurrentProjects() {
  return (
    <CurrentProjectsContainer>
      <Title>Current Projects</Title>
      {currentProjects.map((project, idx) => (
        <CurrentProjectCard project={project} key={idx} />
      ))}
      <SeeAll label="See All Projects" href="/projects" />
    </CurrentProjectsContainer>
  );
}
