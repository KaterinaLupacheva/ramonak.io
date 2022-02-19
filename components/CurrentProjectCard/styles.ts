import Image from 'next/image';
import styled from 'styled-components';

export const CurrentProjectCardContainer = styled.div`
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14),
    0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  padding: 1rem;
  border-radius: 0.5rem;
  height: 10rem;
  background-color: ${(props) => props.theme.colors.contrastBg};
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 8rem;
  width: 20rem;
`;

export const ProjectImage = styled(Image)`
  aspect-ratio: 1 /1;
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CompanyName = styled.p`
  color: ${(props) => props.theme.colors.grey2};
  margin: 0;
  font-size: 1.5rem;
`;

export const Tech = styled.p``;

export const Period = styled.p`
  color: ${(props) => props.theme.colors.grey1};
`;

export const Position = styled.p`
  font-weight: bolder;
`;

export const NDA = styled.div`
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 0.5rem;
  height: 8rem;
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  border: 1px solid ${(props) => props.theme.colors.text};
`;
