import Link from 'next/link';
import { IProps } from './interface';
import { RectangleCardWrapper } from './styles';

const RectangleCard: React.FC<IProps> = ({ tag, title, desc, link, handleHover, fade }) => {
    const prop = {};
    return (
        <RectangleCardWrapper fade={fade} onMouseOver={(e) => handleHover(title)} onMouseLeave={() => handleHover('')}>
            <Link href={link.url} passHref>
                <a {...(link.external && { target: '_blank' })}>
                    <div className='tags'>
                        {tag.map((item) => (
                            <small key={item} className='tag'>
                                {item}
                            </small>
                        ))}
                    </div>

                    <h1>{title}</h1>
                    <small className='desc'>{desc}</small>
                </a>
            </Link>
        </RectangleCardWrapper>
    );
};

export default RectangleCard;
