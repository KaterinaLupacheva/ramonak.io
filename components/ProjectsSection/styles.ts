import styled from 'styled-components';

export const ProjectsSectionContainer = styled.div``;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;
