import styled from 'styled-components';

export const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    .avatar {
        border-radius: 50%;
    }

    .fa-external-link-alt {
        font-size: 0.8rem;
    }

    .links {
        display: flex;
        align-items: center;
        gap: 2rem;
        justify-content: space-between;
    }

    @media only screen and (max-width: 768px) {
        .links {
            margin: 1rem 0;
            justify-content: space-between;
            width: 100%;
        }
    }
`;
