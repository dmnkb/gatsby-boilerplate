import React, { useState } from 'react';
import { graphql, Link } from "gatsby"

import { 
  Typography,
} from '@material-ui/core';

import Layout from "../components/layout"

import "../styles/grid.scss"

const Post = ({ data }) => {

  return (
    <Layout>
      <div className="grid">
        <div className="inner">
          <div className="s-12 col">

            <Typography variant="h1">{data.wpPage.title}</Typography>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPage(id: {eq: $id}) {
      title
    }
  }
`

export default Post
