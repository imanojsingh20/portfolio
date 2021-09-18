import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme, Theme, themeDark } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={themeDark}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
export default MyApp;
