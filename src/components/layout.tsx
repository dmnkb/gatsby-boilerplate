/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme'

import Header from "./header"

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
      allWpMenuItem(filter: {locations: {eq: MENU_1}}) {
        nodes {
          url
          label
        }
      }
    }
  `)

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        
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
