import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      text: string;
      grey: string;
      ramonakRed: string;
      grey1: string;
    };
    variant: 'dark' | 'light';
  }
}
