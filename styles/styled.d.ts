import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      text: string;
      grey: string;
      ramonakRed: string;
      grey1: string;
      grey2: string;
      contrastBg: string;
    };
    variant: 'dark' | 'light';
  }
}
