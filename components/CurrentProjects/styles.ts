import styled from 'styled-components';

export const CurrentProjectsContainer = styled.div``;

export const ProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: space-between;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
