import { useEffect, useState } from 'react';
import { IProps } from './interface';
import { SnackBarWrapper } from './styles';

const SnackBar: React.FC<IProps> = ({ message, type }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);

        setTimeout(() => {
            setShow(false);
        }, 2 * 1000);
    }, [message]);

    if (show && message) {
        return <SnackBarWrapper type={type}>{message}</SnackBarWrapper>;
    }

    return <></>;
};

export default SnackBar;
