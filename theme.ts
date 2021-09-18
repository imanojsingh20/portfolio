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
    },
};

export type Theme = typeof theme;

export const GlobalStyle = createGlobalStyle<{
    theme: Theme;
}>`
    * {
        scroll-behavior: smooth;
    box-sizing: border-box;

    }
    
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color:${({ theme }) => theme.colors.textPrimary};
    font-family: 'Roboto Mono', monospace;
  }

  a {
      text-decoration: none;
      color:${({ theme }) => theme.colors.textPrimary};
  }
`;
