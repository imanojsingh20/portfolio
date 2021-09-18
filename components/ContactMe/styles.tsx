import styled from 'styled-components';

export const ContactMeSection = styled.section`
    padding-bottom: calc(50vh - 5rem);
    label {
        display: block;
    }

    input,
    textarea {
        border: none;
        outline: none;
        padding: 0.5rem;
        width: 100%;
        margin: 1rem 0;
        resize: vertical;
        font-size: 1rem;
        box-sizing: border-box;
    }

    button {
        background: #fff;
        border: none;
        outline: none;
        padding: 0.5rem;
        font-weight: bold;
    }

    @media only screen and (max-width: 768px) {
        padding: 1rem;
    }
`;
