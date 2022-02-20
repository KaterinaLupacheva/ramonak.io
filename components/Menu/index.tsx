import MenuItem from './MenuItem';
import { MenuContainer } from './styles';

export default function Menu() {
  return (
    <MenuContainer>
      <MenuItem href="/" text="Home" />
      <MenuItem href="/posts" text="Blog" />
      <MenuItem href="/projects" text="Projects" />
      <MenuItem href="/snippets" text="Snippets" />
      <MenuItem href="/about" text="About" />
    </MenuContainer>
  );
}
