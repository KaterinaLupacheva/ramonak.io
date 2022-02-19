import store from '../../public/static/projects/storehero/storehero.png';
import { CurrentProject } from '../../ts';
import ExternalLink from '../shared/ExternalLink';
import {
  CompanyName,
  Content,
  CurrentProjectCardContainer,
  ImageWrapper,
  NDA,
  Period,
  Position,
  ProjectImage,
  Tech,
} from './styles';

type CurrentProjectCardProps = {
  project: CurrentProject;
};

export default function CurrentProjectCard({ project }: CurrentProjectCardProps) {
  const { companyLink, companyName, date, position, tech, image } = project;
  console.log(image);
  return (
    <CurrentProjectCardContainer>
      <Content>
        <ExternalLink href={companyLink}>
          <CompanyName>{companyName}</CompanyName>
        </ExternalLink>
        <Position>{position}</Position>
        <Tech>Main technology - {tech}</Tech>
        <Period>{date}</Period>
      </Content>
      {image ? (
        <ImageWrapper>
          <ProjectImage src={store} layout="fill" objectFit="cover" objectPosition="top" />
        </ImageWrapper>
      ) : (
        <NDA>NDA signed</NDA>
      )}
    </CurrentProjectCardContainer>
  );
}
