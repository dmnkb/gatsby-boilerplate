import React from "react"
import styled from 'styled-components'

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/grid.scss"

import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="grid">
      <div class="inner">
        <div class="col ip12-9">
          9
        </div>
        <div class="col ip12-3">
          3
        </div>
      </div>
    </div>
    Hello World
    <StyledButton variant="contained" color="primary">Button</StyledButton>
  </Layout>
)

export default IndexPage
