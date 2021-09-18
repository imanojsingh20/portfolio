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
                    I’m a <span>Fullstack Software Engineer</span> working on Front-End Experiences at <span>GoodWorker</span>. I am currently located
                    in <span>Delhi NCR, India</span>. I love to play Volleyball and video games.
                </p>

                <Navigation />
            </div>

            <SocialLinks />
        </AboutMeWrapper>
    );
};

export default AboutMe;
