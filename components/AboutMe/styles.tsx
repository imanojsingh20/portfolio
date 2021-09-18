import styled from 'styled-components';

export const AboutMeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .info {
        h1 {
            font-size: 4rem;
            line-height: 1.1;

            span {
                display: block;
            }
        }

        p {
            color: ${({ theme }) => theme.colors.textSecondary};
            line-height: 1.8;

            span {
                color: ${({ theme }) => theme.colors.textPrimary};
                text-decoration: underline;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        padding: 1rem;

        .info {
            h1 {
                font-size: 2.5rem;
            }
        }
    }
`;
