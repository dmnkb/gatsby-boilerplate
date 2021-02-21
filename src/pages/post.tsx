import React, { useState } from 'react';

import Layout from "../components/layout"

import { graphql, Link } from "gatsby"

import "../styles/grid.scss"

const Post = ({ data }) => {

  return (
    <Layout>
      <div className="grid">
        <div className="inner">
          Post
          {JSON.stringify(data)}

        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPost(id: {eq: $id}) {
      title
    }
  }
`

export default Post
