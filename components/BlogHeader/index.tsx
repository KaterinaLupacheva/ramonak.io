import { format, parseISO } from 'date-fns';
import { Post } from 'ts';

import { BlogHeaderContainer, Date, Description, InfoContainer, ReadTime, Title } from './styles';

export default function BlogHeader({ title, description, date, readingTime }: Post) {
  return (
    <BlogHeaderContainer>
      <Title>{title}</Title>
      <InfoContainer>
        <Date>{format(parseISO(date), 'MMMM dd, yyyy')}</Date>
        <ReadTime>{readingTime.text}</ReadTime>
      </InfoContainer>
      <Description>{description}</Description>
    </BlogHeaderContainer>
  );
}
