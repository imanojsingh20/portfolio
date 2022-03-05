import styled from 'styled-components';

export const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    .avatar {
        border-radius: 50%;
    }

    .fa-external-link-alt {
        font-size: 1.2rem;
    }

    .links {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    @media only screen and (max-width: 768px) {
        .links {
            margin: 1rem 0;
            width: 100%;
            justify-content: center;

            a {
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                flex-wrap: wrap;
            }
        }

        .fa-external-link-alt {
            display: none;
        }
    }
`;
