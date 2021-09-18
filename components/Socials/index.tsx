import { SocialWrapper } from './styles';
import data from './constants';

const SocialLinks = () => {
    return (
        <SocialWrapper>
            {data.map(({ title, icon, link }) => (
                <div key={title}>
                    <a href={link} target='_blank' rel='noreferrer'>
                        <i className={icon}></i> {title} <i className='fas fa-external-link-alt'></i>
                    </a>
                </div>
            ))}
        </SocialWrapper>
    );
};

export default SocialLinks;
