import { IProps } from './interface';
import { RectangleCardWrapper } from './styles';

const RectangleCard: React.FC<IProps> = ({ tag, title, desc, link }) => {
    return (
        <RectangleCardWrapper href={link} target='_blank' rel='noreferrer'>
            <div className='tags'>
                {tag.map((item) => (
                    <small key={item} className='tag'>
                        {item}
                    </small>
                ))}
            </div>

            <h1>{title}</h1>
            <small className='desc'>{desc}</small>
        </RectangleCardWrapper>
    );
};

export default RectangleCard;
