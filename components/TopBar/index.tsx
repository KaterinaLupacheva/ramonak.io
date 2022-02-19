import Logo from '../Logo';
import Menu from '../Menu';
import ThemeToggle from '../ThemeToggle';
import { TopBarContainer } from './styles';

export default function TopBar() {
  return (
    <TopBarContainer>
      <Logo />
      <Menu />
      <ThemeToggle />
    </TopBarContainer>
  );
}
