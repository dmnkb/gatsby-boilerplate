/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from 'styled-components';

import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles';

import Header from "./header"

const myTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Syne',
      'sans-serif'
    ].join(","),
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

type LayoutProps = {
  readonly children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const staticPageData = useStaticQuery(graphql`
    query StaticPageQuery {
      site {
        siteMetadata {
          title
        }
      },
      allWpMenuItem(filter: {locations: {eq: PRIMARY}}) {
        nodes {
          url
          label
        }
      }
    }
  `)

  return (
    <MuiThemeProvider theme={myTheme}>
      <ThemeProvider theme={myTheme}>
        
        <Header 
          siteTitle={staticPageData.site.siteMetadata?.title || `Title`} 
          navItems={staticPageData.allWpMenuItem.nodes} />
        
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

export default Layout
