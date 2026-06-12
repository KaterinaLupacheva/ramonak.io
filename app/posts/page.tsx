import { getAllPostMetadata } from "@/lib/posts";
import { createPageMetadata } from "@/lib/site";
import PostArchive from "./PostArchive";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Blog",
  description: "Tutorials, technical notes, and stories from Kate",
  path: "/posts",
});

export default function PostsPage() {
  const posts = getAllPostMetadata();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <p className={styles.eyebrow}>Writing archive</p>
          <h1>Notes from building things.</h1>
          <p>
            Tutorials, technical explorations, and stories gathered across
            full-stack web and mobile development.
          </p>
        </div>
      </header>
      <section className={styles.archive}>
        <PostArchive posts={posts} />
      </section>
    </div>
  );
}
