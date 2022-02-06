import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      text: string;
      grey: string;
      ramonakRed: string;
    };
    variant: 'dark' | 'light';
  }
}
