type NavItem = {
  name: string;
  isDarkBg?: boolean;
};

type NavItems = {
  [key: string]: NavItem;
};

export const navItems: NavItems = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
    isDarkBg: true,
  },
  "/projects": {
    name: "Projects",
  },
  "/snippets": {
    name: "Snippets",
  },
  "/blog": {
    name: "Blog",
  },
};
