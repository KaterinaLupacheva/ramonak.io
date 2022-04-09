import ViewsCounter from 'components/ViewsCounter';
import Link from 'next/link';
import { Post } from 'ts';

import { BlogPostCardContainer, Date, ImageWrapper, Picture, SideContainer, Title } from './styles';

type BlogPostCardProps = {
  post: Post;
  withImage?: boolean;
};

export default function BlogPostCard({
  post: { socialImage, publishedAtFormatted, title, slug },
  withImage = false,
}: BlogPostCardProps) {
  return (
    <Link href={`/posts/${slug}`} passHref>
      <a>
        <BlogPostCardContainer>
          {withImage && (
            <ImageWrapper>
              <Picture
                src={socialImage}
                layout="fixed"
                width={250}
                height={128}
                objectFit="contain"
              />
            </ImageWrapper>
          )}
          <SideContainer>
            <Date>{publishedAtFormatted}</Date>
            <Title>{title}</Title>
            <ViewsCounter slug={slug} />
          </SideContainer>
        </BlogPostCardContainer>
      </a>
    </Link>
  );
}
