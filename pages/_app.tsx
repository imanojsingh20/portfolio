import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, themeDark } from '../theme';
import * as ga from '../analytics/helper';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            ga.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <ThemeProvider theme={themeDark}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
export default MyApp;
