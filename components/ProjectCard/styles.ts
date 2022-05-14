import styled from "styled-components";
import Image from "next/image";

export const ProjectCardContainer = styled.div`
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  height: 20rem;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.contrastBg};
`;

export const ContentWrapper = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProjectName = styled.h2`
  margin: 0;
  text-align: center;
`;

export const CompanyName = styled.p`
  color: ${(props) => props.theme.colors.ramonakRed};
  margin: 0;
  font-size: 1.25rem;
  width: fit-content;
`;

export const Period = styled.p`
  font-style: italic;
`;

export const Description = styled.p`
  font-size: 1.25rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 8rem;
  height: 16rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ProjectImage = styled(Image)`
  aspect-ratio: 1 /1;
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 0.5rem;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin-right: 0.4rem;
  }
`;

export const Tech = styled.div`
  border-radius: 0.2rem;
  padding: 0.2rem;
  border: ${(props) => `1px solid ${props.theme.colors.grey1}`};
  font-weight: bold;
`;
