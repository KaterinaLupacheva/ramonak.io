import { Project } from '../../ts';
import ExternalLink from '../shared/ExternalLink';
import { CompanyName, ProjectCardContainer } from './styles';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { companyName, companyLink, projectTitle, projectLink, description, image, tech, date } =
    project;
  return (
    <ProjectCardContainer>
      <ExternalLink href={companyLink}>
        <CompanyName>{companyName}</CompanyName>
      </ExternalLink>
    </ProjectCardContainer>
  );
}
