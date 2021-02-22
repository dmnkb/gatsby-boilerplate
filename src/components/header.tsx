import { Link } from "gatsby"

import PropTypes from "prop-types"
import React from 'react';

import { 
  Typography
} from '@material-ui/core';

import styled from 'styled-components'

const StyledNavRail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledLogo = styled(Typography)`
  a {
    text-decoration: none;
  }
`
const StyledNavigation = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    display: flex;
    li {
      margin: 0;
      padding: .5em;
      a {
        text-decoration: none;
      }
    }
  }
`

type HeaderProps = {
  readonly siteTitle: string,
  readonly navItems: []
}

const Header: React.FC<HeaderProps> = ({ siteTitle, navItems }) => {    
  
  return (
    <header className="grid">
      <div className="inner">
        <StyledNavRail className="s-12 col">
          <StyledLogo variant="h5">
            <Link to="/">{siteTitle}</Link>
          </StyledLogo>
          <StyledNavigation>
            <ul>
              {navItems.map((item: any) => {
                return (
                  <li key={item.url}>
                    <Link to={item.url}>
                      <Typography variant="body1">{item.label}</Typography>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </StyledNavigation>
        </StyledNavRail>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

