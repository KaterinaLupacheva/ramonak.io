import Image from 'next/image';
import styled from 'styled-components';

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const SideContainer = styled.div`
  max-width: 60%;
`;

export const Title = styled.h1`
  line-height: 1.5;
  padding-right: 2rem;
`;

export const Subtitle = styled.div`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.grey2};

  & li {
    margin-bottom: 1.5rem;
  }
`;

export const PhotoWrapper = styled.div`
  min-width: 200px;
`;

export const Photo = styled(Image)`
  border-radius: 50%;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.ramonakRed};
  cursor: pointer;
`;
