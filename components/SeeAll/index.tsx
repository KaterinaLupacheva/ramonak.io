import NextLink from 'next/link';

import { SeeAllContainer } from './styles';

type SeeAllProps = {
  label: string;
  href: string;
};

export default function SeeAll({ label, href }: SeeAllProps) {
  return (
    <NextLink href={href} passHref>
      <SeeAllContainer>{label}...</SeeAllContainer>
    </NextLink>
  );
}
