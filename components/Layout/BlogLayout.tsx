import BlogHeader from 'components/BlogHeader';
import Divider from 'components/Divider';
import { PropsWithChildren, useEffect } from 'react';
import { Post } from 'ts';

import Layout from '.';
import { Container, ContentWrapper, Wrapper } from './BlogLayout.styles';

export default function BlogLayout({ children, post }: PropsWithChildren<{ post: Post }>) {
  const { title, description, date, socialImage, slug } = post;
  const meta = {
    title: title,
    description: description,
    image: socialImage,
    date: new Date(date).toISOString(),
    type: 'article',
  };

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/ramonak: ${slug}`, {
        method: 'POST'
      });

    process.env.NODE_ENV === 'production' &&
      registerView();
  }, [slug]);

  return (
    <Layout meta={meta}>
      <Wrapper>
        <Container>
          <BlogHeader {...post} />
          <ContentWrapper>{children}</ContentWrapper>
          <Divider />
        </Container>
      </Wrapper>
    </Layout>
  );
}
