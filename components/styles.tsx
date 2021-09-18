import styled from 'styled-components';

export const StickyWrapper = styled.div`
    position: sticky;
    top: 5rem;
    max-height: calc(100vh - 5rem * 2);
    flex: 1;
    display: flex;

    @media only screen and (max-width: 768px) {
        position: initial;
    }
`;

export const Container = styled.div`
    display: flex;
    max-width: 1100px;
    margin: auto;
    flex-wrap: wrap;
    gap: 5rem;
    padding: 1rem;

    @media only screen and (max-width: 768px) {
        gap: 1rem;
        flex-direction: column;
    }
`;
