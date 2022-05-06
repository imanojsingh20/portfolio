export const pageview = (url: string) => {
    if (window && window.gtag) {
        window.gtag('config', 'G-Y0*******', {
            page_path: url,
        });
    }
};

export const event = ({ action, params }: { action: string; params: any }) => {
    window.gtag('event', action, params);
};
