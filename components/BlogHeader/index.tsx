import { Post } from 'ts';

import { BlogHeaderContainer, Date, Description, InfoContainer, ReadTime, Title } from './styles';

export default function BlogHeader({
  title,
  description,
  readingTime,
  publishedAtFormatted,
}: Post) {
  return (
    <BlogHeaderContainer>
      <Title>{title}</Title>
      <InfoContainer>
        <Date>{publishedAtFormatted}</Date>
        <ReadTime>{readingTime.text}</ReadTime>
      </InfoContainer>
      <Description>{description}</Description>
    </BlogHeaderContainer>
  );
}
