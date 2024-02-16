// import { Theme } from '@emotion/react';

export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff4081',
    background: '#f0f0f0',
    text: '#333',
    lightText: '#fff',
  },
  borderRadius: '6px',
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
};

export type Theme = typeof theme;