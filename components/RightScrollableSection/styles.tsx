import styled from 'styled-components';

export const RightScrolableSectionElement = styled.div`
    flex: 1;

    section {
        padding-top: 5rem;

        h2 {
            padding-bottom: 1rem;
        }

        &:last-child {
            height: calc(100vh - 5rem);
        }
    }

    @media only screen and (max-width: 768px) {
        section {
            padding-top: 1rem;

            .section-title {
                position: sticky;
                top: 0;
                background: #151515;
                padding: 1rem 0;
                z-index: 1;
            }

            &:last-child {
                height: inherit;
                padding-bottom: 5rem;
            }
        }
    }
`;
