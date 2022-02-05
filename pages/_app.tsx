import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
