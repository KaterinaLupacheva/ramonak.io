import ViewsCounter from 'components/ViewsCounter';
import { Post } from 'ts';

import {
  BlogHeaderContainer,
  Date,
  Description,
  InfoContainer,
  ReadTime,
  SideContainer,
  Title,
} from './styles';

export default function BlogHeader({
  title,
  description,
  readingTime,
  publishedAtFormatted,
  slug,
}: Post) {
  return (
    <BlogHeaderContainer>
      <Title>{title}</Title>
      <InfoContainer>
        <Date>{publishedAtFormatted}</Date>
        <SideContainer>
          <ReadTime>{readingTime.text}</ReadTime>
          <ViewsCounter slug={slug} />
        </SideContainer>
      </InfoContainer>
      <Description>{description}</Description>
    </BlogHeaderContainer>
  );
}
