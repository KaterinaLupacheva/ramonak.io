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
  line-height: 1.75;

  & p {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }
`;
