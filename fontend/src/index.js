import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme()
const root = createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}><App /></ThemeProvider>
);