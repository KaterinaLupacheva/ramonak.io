import BlogPostCard from '../BlogPostCard';
import { Title } from '../shared/styled';
import { LatestBlogPostsContainer } from './styles';

export default function LatestBlogPosts() {
  return (
    <LatestBlogPostsContainer>
      <Title>Latest Blog Posts</Title>
      <BlogPostCard />
    </LatestBlogPostsContainer>
  );
}
