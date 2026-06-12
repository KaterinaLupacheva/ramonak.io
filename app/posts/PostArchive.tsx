"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { PostMeta } from "@/lib/post-types";
import styles from "./page.module.css";

type Props = {
  posts: PostMeta[];
};

export default function PostArchive({ posts }: Props) {
  const [category, setCategory] = useState("All");
  const [tag, setTag] = useState("All");
  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(posts.map((post) => post.category))).sort(),
    ],
    [posts],
  );
  const tags = useMemo(
    () => [
      "All",
      ...Array.from(new Set(posts.flatMap((post) => post.tags))).sort(),
    ],
    [posts],
  );
  const visiblePosts = posts.filter(
    (post) =>
      (category === "All" || post.category === category) &&
      (tag === "All" || post.tags.includes(tag)),
  );

  return (
    <>
      <div className={styles.filters}>
        <label className={styles.filter}>
          <span>Category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className={styles.filter}>
          <span>Tag</span>
          <select value={tag} onChange={(event) => setTag(event.target.value)}>
            {tags.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <p className={styles.count}>{visiblePosts.length} posts</p>
      </div>

      <div className={styles.grid}>
        {visiblePosts.map((post) => (
          <article className={styles.card} key={post.slug}>
            <Link href={`/posts/${post.slug}`} className={styles.imageLink}>
              {/* Blog images include legacy GIFs and mixed dimensions. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.socialImage} alt="" className={styles.image} />
            </Link>
            <div className={styles.cardBody}>
              <div className={styles.meta}>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>{post.category}</span>
              </div>
              <h2>
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className={styles.summary}>{post.description}</p>
              <div className={styles.tags}>
                {post.tags.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(date.length === 10 ? `${date}T00:00:00Z` : date));
}
