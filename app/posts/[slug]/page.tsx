import type { Metadata } from "next";
import ArrowIcon from "../../components/ArrowIcon/ArrowIcon";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { formatPostDate, getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

function getPost(params: Props["params"]) {
  return params.then(({ slug }) => getPostBySlug(decodeURIComponent(slug)));
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/posts/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/posts/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [siteConfig.name],
      tags: post.tags,
      images: [post.socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.socialImage],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params);
  if (!post) notFound();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: new URL(post.socialImage, siteConfig.url).toString(),
    datePublished: post.date,
    dateModified: post.updated,
    articleSection: post.category,
    inLanguage: "en",
    author: { "@id": siteConfig.personId },
    publisher: { "@id": siteConfig.personId },
    mainEntityOfPage: `${siteConfig.url}/posts/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <article className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/posts" className={styles.back}>
            <ArrowIcon direction="left" />
            All posts
          </Link>
          <div className={styles.meta}>
            <Link href="/about" className={styles.author}>
              By {siteConfig.name}
            </Link>
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span>{post.category}</span>
          </div>
          <h1>{post.title}</h1>
          <p className={styles.description}>{post.description}</p>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </header>
      <div className={styles.content}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          components={{
            a: ({ href, children, ...props }) => (
              <a
                href={href}
                {...props}
                {...(href?.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {children}
              </a>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
