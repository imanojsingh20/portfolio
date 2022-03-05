import { SocialWrapper } from './styles';
import data from './constants';
import Image from 'next/image';
const SocialLinks = () => {
    return (
        <SocialWrapper>
            <Image className='avatar' width={16 * 3} height={16 * 3} src='https://avatars.githubusercontent.com/blackhatplay' alt='' />
            <div className='links'>
                {data.map(({ title, icon, link }) => (
                    <div key={title}>
                        <a href={link} target='_blank' rel='noreferrer'>
                            <i className={icon}></i> {title} <i className='fas fa-external-link-alt'></i>
                        </a>
                    </div>
                ))}
            </div>
        </SocialWrapper>
    );
};

export default SocialLinks;
