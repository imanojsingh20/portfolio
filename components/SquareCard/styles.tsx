import styled from 'styled-components';

interface SquareCardWrapperProps {
    readonly show: boolean;
}

export const SquareCardWrapper = styled.div<SquareCardWrapperProps>`
    cursor: pointer;
    background: ${({ show, color, theme }) => (show ? color : theme.colors.backgroundSecondary)};
    transition: all 0.2s ease-in-out;

    width: calc(50% - 0.5rem / 2);
    padding-bottom: calc(50% - 0.5rem / 2); /* Same as width, sets height */
    position: relative;
    cursor: pointer;

    h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        text-align: center;
        width: 90%;
    }

    &:hover {
        transform: scale(1.1);
    }
`;
