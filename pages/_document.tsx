import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name='description' content='Portfolio site' />
                    <link rel='icon' href='/favicon.ico' />

                    <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
                    <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
                    <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
                    <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
                    <link rel='apple-touch-icon' sizes='114x114' href='/apple-icon-114x114.png' />
                    <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
                    <link rel='apple-touch-icon' sizes='144x144' href='/apple-icon-144x144.png' />
                    <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
                    <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
                    <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
                    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <meta name='msapplication-TileColor' content='#ffffff' />
                    <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
                    <meta name='theme-color' content='#ffffff'></meta>
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        rel='stylesheet'
                        href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
                        integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
                        crossOrigin='anonymous'
                    />
                    <link
                        rel='stylesheet'
                        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
                        integrity='sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=='
                        crossOrigin='anonymous'
                        referrerPolicy='no-referrer'
                    />

                    <script async src={`https://www.googletagmanager.com/gtag/js?id=G-7D9SFR0ZVJ`} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-7D9SFR0ZVJ', {
                                page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
