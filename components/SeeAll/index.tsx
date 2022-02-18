import NextLink from 'next/link';

import { SeeAllContainer } from './styles';

type SeeAllProps = {
  label: string;
  href: string;
};

export default function SeeAll({ label, href }: SeeAllProps) {
  return (
    <NextLink href={href}>
      <SeeAllContainer>See All {label}...</SeeAllContainer>
    </NextLink>
  );
}
