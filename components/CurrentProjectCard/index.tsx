import { CurrentProject } from '../../ts';
import ExternalLink from '../shared/ExternalLink';
import { CompanyName, CurrentProjectCardContainer, Description } from './styles';

type CurrentProjectCardProps = {
  project: CurrentProject;
};

export default function CurrentProjectCard({ project }: CurrentProjectCardProps) {
  const { companyLink, companyName, date, position, tech } = project;
  return (
    <CurrentProjectCardContainer>
      <ExternalLink href={companyLink}>
        <CompanyName>{companyName}</CompanyName>
      </ExternalLink>
      <Description>
        {date}
        <br />
        {position}
        <br />
        Main technology - {tech}
      </Description>
    </CurrentProjectCardContainer>
  );
}
