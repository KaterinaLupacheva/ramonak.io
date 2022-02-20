import styled from 'styled-components';

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 9vw;
  margin-right: 10vw;
  justify-content: space-between;
  padding-bottom: 4rem;
  position: sticky;
  top: 0px;
  background-color: ${(props) => props.theme.colors.bg};
  z-index: 10;
  width: 81%;
`;
