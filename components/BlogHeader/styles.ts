import styled from 'styled-components';

export const BlogHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1``;

export const Description = styled.p`
  font-size: 1.2rem;
  font-style: italic;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => props.theme.colors.grey2};
  margin-bottom: 2rem;
`;

export const Date = styled.span``;

export const ReadTime = styled.span`
  padding-right: 0.5rem;
`;

export const SideContainer = styled.div`
  display: flex;
`;
