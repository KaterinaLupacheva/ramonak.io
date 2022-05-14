import NDA from "components/NDA";
import store from "../../public/static/projects/storehero/storehero.png";
import { CurrentProject } from "../../ts";
import ExternalLink from "../shared/ExternalLink";
import {
  CompanyName,
  Content,
  CurrentProjectCardContainer,
  ImageWrapper,
  Period,
  Position,
  ProjectImage,
  Tech,
} from "./styles";

type CurrentProjectCardProps = {
  project: CurrentProject;
};

export default function CurrentProjectCard({
  project,
}: CurrentProjectCardProps) {
  const { companyLink, companyName, date, position, tech, image } = project;

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

      <ImageWrapper>
        {image ? (
          <ProjectImage
            src={store}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        ) : (
          <NDA />
        )}
      </ImageWrapper>
    </CurrentProjectCardContainer>
  );
}
