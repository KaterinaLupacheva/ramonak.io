import AboutLayout from "components/Layout/AboutLayout";
import { getContent } from "lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import components from "../components/MDXComponents";

export default function AboutPage({ content }) {
  const { mdxSource } = content;
  return (
    <AboutLayout>
      <MDXRemote {...mdxSource} components={components} />
    </AboutLayout>
  );
}

export async function getStaticProps() {
  const content = await getContent("/about");

  return { props: { content } };
}
