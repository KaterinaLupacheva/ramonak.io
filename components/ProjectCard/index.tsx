import { Project } from "../../ts";
import ExternalLink from "../shared/ExternalLink";
import {
  CompanyName,
  ContentWrapper,
  Description,
  ImageWrapper,
  Period,
  ProjectCardContainer,
  ProjectImage,
  ProjectName,
  SideContainer,
  Tech,
  TechContainer,
} from "./styles";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    companyName,
    companyLink,
    projectTitle,
    projectLink,
    description,
    image,
    tech,
    date,
  } = project;
  return (
    <ProjectCardContainer>
      <ExternalLink href={projectLink}>
        <ProjectName>{projectTitle}</ProjectName>
      </ExternalLink>
      <ContentWrapper>
        <SideContainer>
          <Description>{description}</Description>
          <ExternalLink href={companyLink}>
            <CompanyName>{companyName}</CompanyName>
          </ExternalLink>

          <Period>{date}</Period>
          <TechContainer>
            {tech.map((t, idx) => (
              <Tech key={idx}>{t}</Tech>
            ))}
          </TechContainer>
        </SideContainer>
        <ImageWrapper>
          <ProjectImage src={image} alt={projectTitle} layout="fill" />
        </ImageWrapper>
      </ContentWrapper>
    </ProjectCardContainer>
  );
}
