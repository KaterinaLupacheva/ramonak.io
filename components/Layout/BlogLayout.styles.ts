import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 50rem;
`;

export const ContentWrapper = styled.div`
  font-size: 1.125rem;
  line-height: 1.82813rem;

  & p {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

  & code {
    font-size: 1em;
  }

  & a {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.ramonakRed};
  }
`;
