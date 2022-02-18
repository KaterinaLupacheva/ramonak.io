import styled from 'styled-components';

export const CurrentProjectCardContainer = styled.div`
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14),
    0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  height: 10rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.grey};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.45;
  margin-bottom: 2rem;
`;

export const CompanyName = styled.p`
  color: ${(props) => props.theme.colors.grey1};
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
`;

export const Description = styled.div`
  line-height: 2;
`;
