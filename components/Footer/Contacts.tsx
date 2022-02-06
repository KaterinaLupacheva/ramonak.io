import { Github, Linkedin, Twitter } from '@styled-icons/fa-brands';
import { ReactNode } from 'react';

import { ContactsContainer, Link } from './styles';

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

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <Link target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </Link>
);
