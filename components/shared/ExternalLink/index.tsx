import { ReactNode } from 'react';

import { Link } from './styles';

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </Link>
  );
}
