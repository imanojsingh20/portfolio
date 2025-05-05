import styled from 'styled-components';

interface RectangleCardWrapperProps {
    fade: boolean;
}

export const RectangleCardWrapper = styled.div<RectangleCardWrapperProps>`
    display: block;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    padding: 3rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    opacity: ${({ fade }) => fade && 0.5};

    .tags {
        display: flex;
        gap: 1rem;
    }

    h1 {
        margin: 1.5rem auto;
        font-weight: normal;
        overflow: hidden;
        font-weight: normal;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .desc {
        font-weight: lighter;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
    }

    &:hover {
        transform: scale(1.1);
    }

    @media only screen and (max-width: 768px) {
        padding: 2rem 3rem;

        &:hover {
            transform: none;
        }
    }
`;
