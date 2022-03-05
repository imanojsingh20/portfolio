import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        primary: '#0070f3',
        textPrimary: '#fff',
        textSecondary: '#949495',
        background: '#fff',
        backgroundSecondary: 'rgba(32,32,34,1)',
    },
};

export const themeDark = {
    colors: {
        primary: '#0070f3',
        textPrimary: '#fff',
        textSecondary: '#949495',
        background: '#151515',
        backgroundSecondary: 'rgba(32,32,34,1)',
        success: 'rgb(56, 142, 60)',
        error: 'rgb(211, 47, 47)',
    },
};

export type Theme = typeof theme;

export const GlobalStyle = createGlobalStyle<{
    theme: Theme;
}>`
    * {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.background};
        color:${({ theme }) => theme.colors.textPrimary};
        font-family: 'Roboto Mono', monospace;
        font-size: 1.6rem;
    }

  a {
      text-decoration: none;
      color:${({ theme }) => theme.colors.textPrimary};
  }
`;
