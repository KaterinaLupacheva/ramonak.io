import SeeAll from 'components/SeeAll';
import { Post } from 'ts';

import BlogPostCard from '../BlogPostCard';
import { Title } from '../shared/styled';
import { LatestBlogPostsContainer } from './styles';

type LatestBlogPostsProps = {
  posts: Post[];
};

export default function LatestBlogPosts({ posts }: LatestBlogPostsProps) {
  console.log('LATESTS', posts);
  return (
    <LatestBlogPostsContainer>
      <Title>Latest Blog Posts</Title>
      {posts.map((post) => (
        <BlogPostCard post={post} key={post.slug} withImage />
      ))}
      <SeeAll href="/posts" label="See All Posts" />
    </LatestBlogPostsContainer>
  );
}
