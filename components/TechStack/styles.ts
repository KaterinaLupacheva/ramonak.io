import styled from 'styled-components';

export const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;

  & li {
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled.p`
  font-size: 24px;
`;

export const Label = styled.span`
  color: ${(props) => props.theme.colors.ramonakRed};
`;
