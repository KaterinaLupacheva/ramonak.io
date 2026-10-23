import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const postsDir = path.join(root, "content", "posts");
const publicDir = path.join(root, "public");
const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));
const required = ["title", "date", "slug", "category", "description", "socialImage"];
const errors = [];
const slugs = new Set();
const posts = files.map((file) => {
  const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
  const parsed = matter(raw);
  for (const field of required) {
    if (typeof parsed.data[field] !== "string" || !parsed.data[field].trim()) {
      errors.push(`${file}: missing required frontmatter "${field}"`);
    }
  }
  if (Number.isNaN(new Date(parsed.data.date).getTime())) {
    errors.push(`${file}: invalid date "${parsed.data.date}"`);
  }
  if (parsed.data.updated !== undefined) {
    if (typeof parsed.data.updated !== "string" || !parsed.data.updated.trim() || Number.isNaN(new Date(parsed.data.updated).getTime())) {
      errors.push(`${file}: invalid updated "${parsed.data.updated}"`);
    } else if (new Date(parsed.data.updated).getTime() < new Date(parsed.data.date).getTime()) {
      errors.push(`${file}: updated "${parsed.data.updated}" is before date "${parsed.data.date}"`);
    }
  }
  if (slugs.has(parsed.data.slug)) errors.push(`${file}: duplicate slug "${parsed.data.slug}"`);
  slugs.add(parsed.data.slug);
  return { file, ...parsed };
});

const localUrlPattern = /(?:!?\[[^\]]*\]\(|(?:src|href)=["'])(\/[^)"'<>\s]+)/g;
for (const post of posts) {
  const source = `${post.content}\n${post.data.socialImage ?? ""}`;
  for (const match of source.matchAll(localUrlPattern)) {
    const url = decodeURI(match[1].split("#")[0].split("?")[0]);
    if (url.startsWith("/posts/") && !path.extname(url)) {
      const slug = url.slice("/posts/".length).replace(/\/$/, "");
      if (!slugs.has(slug)) errors.push(`${post.file}: broken internal post link "${url}"`);
    } else if (path.extname(url) && !fs.existsSync(path.join(publicDir, url))) {
      errors.push(`${post.file}: missing asset "${url}"`);
    }
  }
}

if (errors.length) {
  console.error(`Post validation failed with ${errors.length} error(s):\n${errors.join("\n")}`);
  process.exit(1);
}
console.log(`Validated ${posts.length} posts with unique slugs, frontmatter, links, and assets.`);
