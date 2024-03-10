import { AboutMeWrapper } from './styles';
import Navigation from '../Navigation';
import SocialLinks from '../Socials';

const AboutMe = () => {
    return (
        <AboutMeWrapper>
            <div className='info'>
                <h1>
                    Hello, I’m <span>Manoj Singh.</span>
                </h1>
                <p>
                    I’m a <span>Fullstack Software Engineer</span> working on Front-End Experiences at{' '}
                    <span>
                        <a href='https://corp.rakuten.co.in/' target='_blank' rel='noopener noreferrer'>
                            Rakuten India
                        </a>
                    </span>
                    . I am currently located in <span>Bangalore, India</span>.
                    <div>I love to play Volleyball and video games. Let&apos;s connect sometime and play!!</div>
                </p>
            </div>
            <Navigation />

            <SocialLinks />
        </AboutMeWrapper>
    );
};

export default AboutMe;
