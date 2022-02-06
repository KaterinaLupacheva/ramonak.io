import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.text};
  transition: all 0.3s ease-out;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  margin-left: 10vw;
  margin-right: 10vw;
`;
