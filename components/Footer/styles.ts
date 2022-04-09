import styled from 'styled-components';
import { Github, Linkedin, Twitter } from '@styled-icons/fa-brands';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
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

export const StyledGinhub = styled(Github)`
  color: ${props => props.theme.colors.text};
`;

export const StyledLinkedin = styled(Linkedin)`
  color: ${props => props.theme.colors.text};
`;

export const StyledTwitter = styled(Twitter)`
  color: ${props => props.theme.colors.text};
`;
