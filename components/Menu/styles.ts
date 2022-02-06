import styled from 'styled-components';

export const MenuContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.a<{ isActive: boolean }>`
  font-size: 20px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.ramonakRed};
  }
`;
