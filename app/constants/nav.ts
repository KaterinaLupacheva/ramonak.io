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
  "/about": {
    name: "About",
  },
  "/contact": {
    name: "Contact",
  },
};
