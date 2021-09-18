import { useEffect, useState } from 'react';
import { IProps } from './interface';
import { SquareCardWrapper } from './styles';

const SquareCard: React.FC<IProps> = ({ fact, about, color }) => {
    const [show, setShow] = useState(false);

    const showCard = () => {
        setShow(true);
    };

    useEffect(() => {
        if (show) {
            setTimeout(() => setShow(false), 2 * 1000);
        }
    }, [show]);

    return (
        <SquareCardWrapper color={color} show={show} onClick={(e) => showCard()}>
            <h3 className='desc'>{show ? fact : about}</h3>
        </SquareCardWrapper>
    );
};

export default SquareCard;
