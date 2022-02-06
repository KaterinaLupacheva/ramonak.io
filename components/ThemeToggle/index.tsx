import { Moon, Sun } from '@styled-icons/fa-solid';

import { useThemeContext } from '../../context/ThemeContext';
import { Container } from './styles';

export default function ThemeToggle() {
  const { themeVariant, setThemeVariant } = useThemeContext();

  const toggleTheme = () => {
    setThemeVariant(themeVariant === 'light' ? 'dark' : 'light');
  };
  return (
    <Container>
      {themeVariant === 'light' ? (
        <Moon size={30} onClick={toggleTheme} />
      ) : (
        <Sun size={30} onClick={toggleTheme} />
      )}
    </Container>
  );
}
