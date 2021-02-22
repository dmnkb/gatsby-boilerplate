import { createMuiTheme } from '@material-ui/core/styles';
import styled, { css } from 'styled-components'

import "./styles.scss"

export const StyledWPContent = styled.div`
  ${({ theme }) => css`
    font-family:    ${theme.typography.body1.fontFamily};
    font-family:    ${theme.typography.body1.fontFamily};
    font-size:      ${theme.typography.body1.fontSize};
    font-weight:    ${theme.typography.body1.fontWeight};
    letter-spacing: ${theme.typography.body1.letterSpacing};
    line-height:    ${theme.typography.body1.lineHeight};
  `}
`;

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Ibarra Real Nova',
      'serif'
    ].join(","),
    h1: {
      letterSpacing: "-0.03em"
    },
    body1: {
      fontFamily: [
        'Syne',
        'sans-serif'
      ].join(","),
    },
    body2: {
      fontFamily: [
        'Syne',
        'sans-serif'
      ].join(","),
    }
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#F5D8D1',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme;