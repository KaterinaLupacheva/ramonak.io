import Image from 'next/image';

import { CenteredContent } from './styles';

export default function NextImage({ src, alt, className, ...props }) {
  return (
    <CenteredContent>
      <Image src={src} alt={alt} className={className} {...props} />
    </CenteredContent>
  );
}
