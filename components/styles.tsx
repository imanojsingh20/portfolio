import styled from 'styled-components';

export const StickyWrapper = styled.div`
    position: sticky;
    top: 0;
    max-height: calc(100vh - 5rem * 2);
    flex: 1;
    display: flex;
    padding-top: 5rem;

    @media only screen and (max-width: 768px) {
        position: initial;
    }
`;

export const Container = styled.div`
    max-width: 1100px;
    margin: auto;
    padding: 0 1rem;
`;

export const ShowCase = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;

    @media only screen and (max-width: 768px) {
        gap: 1rem;
        flex-direction: column;
    }
`;

export const Notes = styled.div`
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;
    height: 90vh;
    border-top: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};

    h2 {
        text-align: center;
    }
`;

export const NotesContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
`;

export const Input = styled.input<{ top: number; left: number }>`
    position: absolute;
    top: ${({ top }) => top + 'px'};
    left: ${({ left }) => left + 'px'};
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1.5rem;
    z-index: 10;
`;

export const Label = styled.div<{ top: number; left: number; color: string; rotate: string }>`
    max-width: 300px;
    position: absolute;
    top: ${({ top }) => top + 'px'};
    left: ${({ left }) => left + 'px'};
    background: ${({ color }) => color};
    padding: 1rem;
    border-radius: 5px;
    transform: ${({ rotate }) => `rotate(${rotate})`};

    @media only screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`;
