import styled from 'styled-components';

interface SnackBarWrapperProps {
    readonly type: string;
}

export const SnackBarWrapper = styled.div<SnackBarWrapperProps>`
    background-color: ${({ type, theme }) => {
        if (type === 'error') {
            return theme.colors.error;
        }

        if (type === 'success') {
            return theme.colors.success;
        }

        return theme.colors.backgroundSecondary;
    }};

    border-radius: 4px;
    padding: 0.5rem;
`;
