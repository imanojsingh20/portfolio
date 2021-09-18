import styled from 'styled-components';

export const RightScrolableSectionElement = styled.div`
    flex: 1;

    section {
        padding-top: 5rem;
    }

    @media only screen and (max-width: 768px) {
        section {
            padding-top: 1rem;
        }
    }
`;
