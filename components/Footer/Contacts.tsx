import ExternalLink from '../shared/ExternalLink';
import { ContactsContainer, StyledGinhub, StyledLinkedin, StyledTwitter } from './styles';

export default function Contacts() {
  return (
    <ContactsContainer>
      <ExternalLink href="https://www.linkedin.com/in/katsiaryna-lupachova/">
        <StyledLinkedin size={30} />
      </ExternalLink>
      <ExternalLink href="https://github.com/KaterinaLupacheva">
        <StyledGinhub size={30} />
      </ExternalLink>
      <ExternalLink href="https://twitter.com/ramonak_io">
        <StyledTwitter size={30} />
      </ExternalLink>
    </ContactsContainer>
  );
}
