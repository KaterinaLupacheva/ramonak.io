import { Eye } from '@styled-icons/fa-solid/Eye';
import Image from 'next/image';
import styled from 'styled-components';

export const BlogPostCardContainer = styled.div`
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14),
    0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0.5rem;
  padding: 1rem;
  height: 10rem;
  background-color: ${(props) => props.theme.colors.contrastBg};
  display: flex;
  align-items: center;
`;

export const SideContainer = styled.div`
  height: 100%;
  margin-left: 5rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 8rem;
  width: 20rem;
`;

export const Picture = styled(Image)``;

export const Date = styled.div`
  color: ${(props) => props.theme.colors.grey2};
`;

export const Title = styled.h4`
  font-size: 1.25rem;
`;

export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Views = styled.div`
  color: ${(props) => props.theme.colors.grey2};
`;

export const EyeIcon = styled(Eye)`
  color: ${(props) => props.theme.colors.grey2};
  height: 1rem;
  margin-right: 0.4rem;
`;
