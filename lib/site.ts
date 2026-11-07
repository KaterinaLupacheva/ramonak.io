import type { Metadata } from "next";

export const siteConfig = {
  name: "Kate",
  siteName: "ramonak.io",
  url: "https://ramonak.io",
  description:
    "Full-stack engineer who builds AI products, like LLM pipelines and MCP servers, and the Claude Code workflows, skills, and evals behind them.",
  socialImage: "/images/storehero.png",
  socialLinks: [
    "https://github.com/KaterinaLupacheva",
    "https://www.linkedin.com/in/katsiaryna-lupachova/",
    "https://twitter.com/ramonak_io",
  ],
} as const;

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      images: [siteConfig.socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.socialImage],
    },
  };
}
