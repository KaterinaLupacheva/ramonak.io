import Image from 'next/image';
import NextLink from 'next/link';
import { useTheme } from 'styled-components';

import logoDark from '../../public/logos/logo_dark.png';
import logoLight from '../../public/logos/logo_light.png';
import { LogoContainer } from './styles';

export default function Logo() {
  const theme = useTheme();
  return (
    <LogoContainer>
      <NextLink href="/">
        <a>
          <Image
            src={theme.variant === 'light' ? logoDark : logoLight}
            alt="ramonak logo"
            objectFit="fill"
          />
        </a>
      </NextLink>
    </LogoContainer>
  );
}
