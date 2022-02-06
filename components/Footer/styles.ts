import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactsContainer = styled.div`
  display: flex;
  & > * {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const Link = styled.a``;
