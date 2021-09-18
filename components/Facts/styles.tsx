import styled from 'styled-components';

export const FactsSection = styled.section`
    & > div {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.5rem;
        position: relative;

        div:nth-child(even) {
            transform: translateY(1rem);
        }

        div:nth-child(even) :hover {
            transform: translateY(1rem) scale(1.1);
        }
    }

    @media only screen and (max-width: 768px) {
        margin: 0.5rem 1rem;

        & > div {
            div:hover {
                transform: none;
            }

            div:nth-child(even) :hover {
                transform: translateY(1rem);
            }
        }
    }
`;
