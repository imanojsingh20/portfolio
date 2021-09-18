import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import RightScrolableSection from '../components/RightScrollableSection';
import { Container, StickyWrapper } from '../components/styles';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Manoj Singh | Portfolio</title>
            </Head>
            <Container>
                <StickyWrapper>
                    <AboutMe />
                </StickyWrapper>
                <RightScrolableSection />
            </Container>
        </>
    );
};

export default Home;
