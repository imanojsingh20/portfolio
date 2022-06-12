import styled from 'styled-components';
import ReactMarkdown, { Options } from 'react-markdown';

export const ReactMarkdownStyled = styled(ReactMarkdown)<Options>`
    padding: 5rem 0;
    color: #dce1e6;
    img {
        width: 100%;
    }

    ul {
        li {
            margin-left: 2rem;
        }
    }

    p {
        padding: 1rem 0;
    }

    a {
        color: #1068bf;
        text-decoration: underline;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        padding: 0.5rem 0;
        color: #f4f4f4;
    }

    h1:not(:first-child),
    h2:not(:first-child) {
        text-decoration: underline;
        padding-bottom: 1rem;
        padding-top: 3rem;
    }

    blockquote {
        color: #f4f4f4;
        margin: 0;
        border-left: 0.5em #eee solid;
        padding: 1rem 0;
        padding-left: 3em;
    }

    pre {
        overflow-x: auto;
    }

    @media only screen and (max-width: 768px) {
        padding: 1rem 0;

        pre {
            > div {
                width: calc(100vw - 2rem);
            }
        }
    }
`;
