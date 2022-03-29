import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import type { Theme as MuiTheme } from '@mui/material';
import "@mui/styles";

export const theme = createTheme({
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 992,
      lg: 1280,
      xl: 1920,
    },
  },
});

declare module '@emotion/react' {
  interface Theme extends MuiTheme {}
}

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends MuiTheme {}
}

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </StyledEngineProvider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
