import Image from 'next/image';
import styled from 'styled-components';

export const BlogPostCardContainer = styled.div`
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14),
    0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0.5rem;
  padding: 1rem;
  height: auto;
  background-color: ${(props) => props.theme.colors.contrastBg};
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const SideContainer = styled.div`
  height: 100%;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-right: 5rem;
`;

export const Picture = styled(Image)`
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 0.5rem;
`;

export const Date = styled.div`
  color: ${(props) => props.theme.colors.grey2};
`;

export const Title = styled.h4`
  font-size: 1.25rem;
`;
