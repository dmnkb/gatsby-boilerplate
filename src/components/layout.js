/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from 'styled-components';

import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles';

import Header from "./header"
import "./layout.css"

const myTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Syne',
      'sans-serif'
    ],
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#f6c8b5',
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

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MuiThemeProvider theme={myTheme}>
      <ThemeProvider theme={myTheme}>
        
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        
        <main>{children}</main>
        
        <footer className="grid">
          <div className="row">
            <div className="s-12 col">
              Footer
            </div>
          </div>
        </footer>
        
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
