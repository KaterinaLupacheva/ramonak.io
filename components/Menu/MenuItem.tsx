import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { NavItem } from './styles';

type MenuItemProps = {
  href: string;
  text: string;
};

export default function MenuItem({ href, text }: MenuItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <NavItem isActive={isActive}>
        <span>{text}</span>
      </NavItem>
    </NextLink>
  );
}
