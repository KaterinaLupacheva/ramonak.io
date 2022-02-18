import { Github, Linkedin, Twitter } from '@styled-icons/fa-brands';

import ExternalLink from '../shared/ExternalLink';
import { ContactsContainer } from './styles';

export default function Contacts() {
  return (
    <ContactsContainer>
      <ExternalLink href="https://www.linkedin.com/in/katsiaryna-lupachova/">
        <Linkedin size={30} />
      </ExternalLink>
      <ExternalLink href="https://github.com/KaterinaLupacheva">
        <Github size={30} />
      </ExternalLink>
      <ExternalLink href="https://twitter.com/ramonak_io">
        <Twitter size={30} />
      </ExternalLink>
    </ContactsContainer>
  );
}
