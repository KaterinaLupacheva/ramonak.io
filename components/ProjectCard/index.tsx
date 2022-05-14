import NDA from "components/NDA";
import { Project } from "../../ts";
import ExternalLink from "../shared/ExternalLink";
import {
  CompanyName,
  ContentWrapper,
  Description,
  ImageWrapper,
  NDAWrapper,
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
    isMobile,
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

        <ImageWrapper isMobile={isMobile}>
          {image ? (
            <ProjectImage src={image} alt={projectTitle} layout="fill" />
          ) : (
            <NDAWrapper>
              <NDA />
            </NDAWrapper>
          )}
        </ImageWrapper>
      </ContentWrapper>
    </ProjectCardContainer>
  );
}
