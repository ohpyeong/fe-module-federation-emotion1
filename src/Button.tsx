/** @jsxImportSource @emotion/react */

import React from 'react';
import { Button as MuiButton, Theme } from '@mui/material';
import { css, ThemeProvider } from '@emotion/react';
import { theme } from './bootstrap';

const style = {
  button: (theme: Theme) => css`
    color: red;
    padding: ${theme.spacing(2)};
  `,
  // button: css`
  //   color: red;
  // `
}

const Button = ({children}: any) => {
  return <ThemeProvider theme={theme}>
    <MuiButton css={style.button}>{children}</MuiButton>
    </ThemeProvider>
}

export default Button;