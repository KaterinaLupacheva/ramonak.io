import { ReadTimeResults } from 'reading-time';

export type Project = {
  companyName: string;
  projectTitle: string;
  date: string;
  image?: string;
  description: string;
  companyLink: string;
  tech: string[];
  projectLink?: string;
};

export type CurrentProject = {
  companyName: string;
  date: string;
  position: string;
  companyLink: string;
  tech: string;
  image?: string;
};

export type Post = {
  type: 'Post';
  title: string;
  date: string;
  description: string;
  socialImage: string;
  slug: string;
  content: string;
  publishedAtFormatted: string;
  wordCount: string | number;
  readingTime: ReadTimeResults;
};

export type Views = {
  total: number;
};
