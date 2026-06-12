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
  "/projects": {
    name: "Projects",
  },
  "/posts": {
    name: "Blog",
  },
  "/about": {
    name: "About",
  },
  "/contact": {
    name: "Contact",
  },
};
