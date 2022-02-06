import Image from 'next/image';
import styled from 'styled-components';

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  line-height: 1.5;
  padding-right: 2rem;
`;

export const Subtitle = styled.p`
  font-size: 24px;

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
