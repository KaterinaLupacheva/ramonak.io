import NextLink from 'next/link';

import photo from '../../public/static/images/photo.jpg';
import TechStack from '../TechStack';
import { IntroductionContainer, Link, Photo, PhotoWrapper, Row, Subtitle, Title } from './styles';

export default function Introduction() {
  return (
    <IntroductionContainer>
      <Row>
        <Title>Hi! I&apos;m Kate, a web and mobile apps developer, a freelancer.</Title>
        <PhotoWrapper>
          <Photo src={photo} alt="photo" objectFit="fill" />
        </PhotoWrapper>
      </Row>
      <Subtitle>
        In my free time,
        <ul>
          <li>
            I write{' '}
            <NextLink href="/blog">
              <Link>blog posts</Link>
            </NextLink>{' '}
            about the new things that I learn
          </li>
          <li>
            develop some fun{' '}
            <NextLink href="/projects">
              <Link>projects</Link>
            </NextLink>
          </li>
          <li>
            contribute to an{' '}
            <Link
              href="https://www.npmjs.com/settings/ramonak/packages"
              target="_blank"
              rel="noreferrer"
            >
              open-source community
            </Link>
          </li>
        </ul>
      </Subtitle>
      <TechStack />
    </IntroductionContainer>
  );
}
