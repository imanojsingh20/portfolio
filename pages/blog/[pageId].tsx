import axios from 'axios';
import { Container } from '../../components/styles';
import { PostConfig, posts } from '../../constants/posts';
import { GetStaticProps } from 'next';
import ReactMarkDown from '../../components/ReactMarkDown';
import Head from 'next/head';
import { BlogPagerWrapper } from '../../components/Blog/styles';

import BreadCrumb from '../../components/BreadCrumb';

const BlogPage: React.FC<{ markdown: string; pageConfig: PostConfig }> = ({ markdown, pageConfig }) => {
    return (
        <>
            <Head>
                <title>{pageConfig.title}</title>
            </Head>
            <Container>
                <BlogPagerWrapper>
                    <BreadCrumb />
                    <ReactMarkDown skipHtml>{markdown}</ReactMarkDown>
                </BlogPagerWrapper>
            </Container>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const currentPage = posts.find((post) => post.pageId === context?.params?.pageId);

    let markdown: any;
    try {
        const res = await axios.get(currentPage?.url || '');
        markdown = res.data;
    } catch (error) {
        markdown = 'Page not found';
    }

    return {
        props: {
            markdown,
            pageConfig: currentPage,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    };
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { pageId: post.pageId },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' };
}

export default BlogPage;
