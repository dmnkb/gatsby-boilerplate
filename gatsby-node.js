const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const {
    data: {
      allWpPost: { 
        nodes: allPosts 
      },
      allWpPage: { 
        nodes: allPages
      },
    },
  } = await graphql(`
    query {
      allWpPage {
        nodes {
          id
          uri
        }
      }
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)  

  const pageTemplate = path.resolve(`./src/pages/page.tsx`)
  const postTemplate = path.resolve(`./src/pages/page.tsx`)

  allPages.forEach(page => {
    createPage({
      path: page.uri,
      component: slash(pageTemplate),
      context: {
        id: page.id,
      },
    })
  })
  
  allPosts.forEach(post => {
    createPage({
      path: post.uri,
      component: slash(postTemplate),
      context: {
        id: post.id,
      },
    })
  })
}