import blogImage from '../../public/static/blog-images/charts-export-pdf.png';
import {
  BlogPostCardContainer,
  Date,
  EyeIcon,
  ImageWrapper,
  Picture,
  SideContainer,
  Title,
  Views,
  ViewsContainer,
} from './styles';

export default function BlogPostCard() {
  return (
    <BlogPostCardContainer>
      <ImageWrapper>
        <Picture src={blogImage} layout="responsive" />
      </ImageWrapper>
      <SideContainer>
        <Date>February 18, 2022</Date>
        <Title>Export multiple charts to PDF with React and jsPDF</Title>
        <ViewsContainer>
          <EyeIcon />
          <Views>1234</Views>
        </ViewsContainer>
      </SideContainer>
    </BlogPostCardContainer>
  );
}
