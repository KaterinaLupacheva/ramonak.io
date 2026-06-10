export const socials = [
  {
    icon: "github",
    href: "https://github.com/KaterinaLupacheva",
    alt: "GitHub Logo",
  },
  {
    icon: "twitter",
    href: "https://twitter.com/ramonak_io",
    alt: "Twitter Logo",
  },
  {
    icon: "linkedin",
    href: "https://www.linkedin.com/in/katsiaryna-lupachova/",
    alt: "LinkedIn Logo",
  },
] as const;

export type SocialIconName = (typeof socials)[number]["icon"];
