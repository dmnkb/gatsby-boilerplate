import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from "gatsby"

import { 
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from '@material-ui/core';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledWPContent } from '../theme/theme'

import "../theme/grid.scss"

const IndexPage = ({  }) => {

  const staticFrontPageData = useStaticQuery(graphql`
    query {
      wpPage(isFrontPage: {eq: true}) {
        title
        content
      }
      allWpPost(limit: 3) {
        nodes {
          slug
          title
          excerpt
          uri
        }
      }
    }
  `)

  return (
    <Layout>

      <SEO title="Home" />

      <div className="grid">
        <section className="inner">
          <div className="col s-12">
            <Typography variant="h1">{staticFrontPageData.wpPage.title || "Title"}</Typography>
          </div>
        </section>
        <section className="inner">
          <div className="col s-12">
            {staticFrontPageData.wpPage.content && (
              <StyledWPContent dangerouslySetInnerHTML={{ __html: staticFrontPageData.wpPage.content }}></StyledWPContent>
            )}
          </div>
        </section>
        <section className="inner">
          <div className="col s-12">
            <Typography variant="h2">Recent posts</Typography>
          </div>
          {staticFrontPageData.allWpPost.nodes.map( (node) => {
            return (
              <Card className="col s-12 m-4">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://material-ui.com/static/images/cards/paella.jpg"
                    title="Contemplative Reptile"
                  />
                  <Link to={node.uri}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {node.title}
                      </Typography>
                      <StyledWPContent dangerouslySetInnerHTML={{ __html: node.excerpt }}></StyledWPContent>
                    </CardContent>
                  </Link>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            )
          })}
        </section>
      </div>

    </Layout>
  )
}



export default IndexPage
