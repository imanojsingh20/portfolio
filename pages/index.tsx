import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import AboutMe from '../components/AboutMe';
import RightScrolableSection from '../components/RightScrollableSection';
import { Container, Input, Label, Notes, NotesContentWrapper, ShowCase, StickyWrapper } from '../components/styles';

const data = [
    {
        top: 100,
        left: 500,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, ex?',
        color: '#80ED99',
        rotate: '10deg',
    },
    {
        top: 500,
        left: 300,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam magni ut perspiciatis soluta a. Modi.',
        color: '#00A19D',
        rotate: '-15deg',
    },
];

const colorArray = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
    '#E6B3B3',
    '#6680B3',
    '#66991A',
    '#FF99E6',
    '#CCFF1A',
    '#FF1A66',
    '#E6331A',
    '#33FFCC',
    '#66994D',
    '#B366CC',
    '#4D8000',
    '#B33300',
    '#CC80CC',
    '#66664D',
    '#991AFF',
    '#E666FF',
    '#4DB3FF',
    '#1AB399',
    '#E666B3',
    '#33991A',
    '#CC9999',
    '#B3B31A',
    '#00E680',
    '#4D8066',
    '#809980',
    '#E6FF80',
    '#1AFF33',
    '#999933',
    '#FF3380',
    '#CCCC00',
    '#66E64D',
    '#4D80CC',
    '#9900B3',
    '#E64D66',
    '#4DB380',
    '#FF4D4D',
    '#99E6E6',
    '#6666FF',
];

const maxRotate = 45;

const Home: NextPage = () => {
    const [inputDetails, setInputDetails] = useState<{
        top: number;
        left: number;
    } | null>();

    const [labels, setLabels] = useState(data);

    const InputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = (e: any) => {
        if (e.target.id === 'notes-wrapper') {
            setInputDetails(null);

            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left; //x position within the element.
            const y = e.clientY - rect.top; //y position within the element.
            console.log('Left? : ' + x + ' ; Top? : ' + y + '.');

            setInputDetails({
                top: y,
                left: x,
            });
        }
    };

    useEffect(() => {
        InputRef.current?.select();
    }, [inputDetails]);

    const [innerWidth, setInnerWidth] = useState(0);

    function reportWindowSize() {
        console.log(window.innerWidth);
        setInnerWidth(window.innerWidth);
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onresize = reportWindowSize;

            reportWindowSize();
        }
    }, []);

    const handleSubmit = (e: any) => {
        if (e.key === 'Enter') {
            const random = Math.floor(Math.random() * (colorArray.length + 1));

            const rotateDirection = Math.random() < 0.5 ? '-' : '';

            const rotateDeg = Math.floor(Math.random() * (maxRotate + 1));

            console.log(`${rotateDirection}${rotateDeg}deg`);

            setLabels((prevState) => {
                return [
                    ...prevState,
                    {
                        top: inputDetails!.top,
                        left: inputDetails!.left,
                        text: e.target.value,
                        color: colorArray[random],
                        rotate: `${rotateDirection}${rotateDeg}deg`,
                    },
                ];
            });

            setInputDetails(null);
        }
    };

    return (
        <>
            <Head>
                <title>Manoj Singh | Portfolio</title>
            </Head>
            <Container>
                <ShowCase>
                    <StickyWrapper>
                        <AboutMe />
                    </StickyWrapper>
                    <RightScrolableSection />
                </ShowCase>
                <Notes>
                    <small>Just click and start typing...</small>
                    <NotesContentWrapper id='notes-wrapper' onClick={handleClick}>
                        {inputDetails && (
                            <Input
                                top={inputDetails.top}
                                left={inputDetails.left}
                                defaultValue='Start typing here!'
                                autoFocus
                                ref={InputRef}
                                onKeyDown={handleSubmit}
                            />
                        )}
                        {labels.map(({ top, left, color, text, rotate }, index) => {
                            return (
                                <Label key={index} top={top} left={left} color={color} rotate={rotate}>
                                    {text}
                                </Label>
                            );
                        })}
                    </NotesContentWrapper>
                </Notes>
            </Container>
        </>
    );
};

export default Home;
