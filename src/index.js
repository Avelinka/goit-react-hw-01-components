import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';

const theme = {
  colors: {
    black: '#202020',
    gray: '#5C5C5C',
    white: '#F3F3F3',
    blue: '#5CC5CC',
    lightblue: 'rgba(92, 197, 204, 0.30)',
    shadowblue: 'rgba(92, 197, 204, 0.75)',
    bgcolor: 'rgba(197, 212, 212, 0.90)',
  },

  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },

  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
