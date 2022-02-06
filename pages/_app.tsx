import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { CustomThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}

export default MyApp;
