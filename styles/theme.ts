// my-theme.ts
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  variant: 'light',
  colors: {
    bg: '#fafafa',
    text: '#222;',
    grey: '#e6e6e6',
    ramonakRed: '#d91f5c',
  },
};

export const darkTheme: DefaultTheme = {
  variant: 'dark',
  colors: {
    bg: '#282c35',
    text: '#fafafa',
    grey: '#e6e6e6',
    ramonakRed: '#d91f5c',
  },
};
