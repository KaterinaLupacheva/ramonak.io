import NextLink from 'next/link';

import photo from '../../public/static/images/photo.jpg';
import SeeAll from '../SeeAll';
import {
  IntroductionContainer,
  Link,
  Photo,
  PhotoWrapper,
  Row,
  SideContainer,
  Subtitle,
  Title,
} from './styles';

export default function Introduction() {
  return (
    <IntroductionContainer>
      <Row>
        <PhotoWrapper>
          <Photo src={photo} alt="photo" objectFit="fill" />
        </PhotoWrapper>
        <SideContainer>
          <Title>Hi! I&apos;m Kate, a web and mobile apps developer</Title>
          <Subtitle>
            In my free time, I write{' '}
            <NextLink href="/blog" passHref>
              <Link>blog posts</Link>
            </NextLink>{' '}
            about the new things that I learn, develop some fun{' '}
            <NextLink href="/projects" passHref>
              <Link>projects</Link>
            </NextLink>
            , contribute to an{' '}
            <Link
              href="https://www.npmjs.com/settings/ramonak/packages"
              target="_blank"
              rel="noreferrer"
            >
              open-source community
            </Link>
          </Subtitle>
        </SideContainer>
      </Row>
      <SeeAll label="Read more" href="/about" />
    </IntroductionContainer>
  );
}
