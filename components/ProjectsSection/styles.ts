import styled from "styled-components";

export const ProjectsSectionContainer = styled.div``;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
