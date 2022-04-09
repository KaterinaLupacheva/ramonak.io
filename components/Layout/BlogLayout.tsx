import BlogHeader from 'components/BlogHeader';
import { PropsWithChildren } from 'react';
import { Post } from 'ts';

import Layout from '.';
import { Container, ContentWrapper, Wrapper } from './BlogLayout.styles';

export default function BlogLayout({ children, post }: PropsWithChildren<{ post: Post }>) {
  const { title, description, date, socialImage } = post;
  const meta = {
    title: title,
    description: description,
    image: socialImage,
    date: new Date(date).toISOString(),
    type: 'article',
  };
  return (
    <Layout meta={meta}>
      <Wrapper>
        <Container>
          <BlogHeader {...post} />
          <ContentWrapper>{children}</ContentWrapper>
        </Container>
      </Wrapper>
    </Layout>
  );
}
