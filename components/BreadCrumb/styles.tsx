import styled from 'styled-components';

export const BreadCrumbStyled = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    text-transform: capitalize;
    list-style: none;
    overflow: hidden;
    flex-wrap: wrap;
    white-space: nowrap;
    text-overflow: ellipsis;

    a {
        text-decoration: underline;
    }

    li:last-child {
        width: 15rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .collapsed {
        overflow: auto;

        cursor: pointer;
        text-decoration: underline;
    }
`;
