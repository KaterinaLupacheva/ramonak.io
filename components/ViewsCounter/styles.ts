import { Eye } from '@styled-icons/fa-solid/Eye';
import styled from 'styled-components';

export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ViewsCount = styled.div`
  color: ${(props) => props.theme.colors.grey2};
`;

export const EyeIcon = styled(Eye)`
  color: ${(props) => props.theme.colors.grey2};
  height: 1rem;
  margin-right: 0.4rem;
`;
