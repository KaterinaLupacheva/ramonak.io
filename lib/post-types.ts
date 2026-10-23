export type PostMeta = {
  title: string;
  date: string;
  updated: string;
  slug: string;
  category: string;
  tags: string[];
  description: string;
  socialImage: string;
};

export type Post = PostMeta & {
  content: string;
};
