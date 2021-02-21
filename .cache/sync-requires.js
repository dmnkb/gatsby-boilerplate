const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/admin/Documents/GitHub/gatsby-boilerplate/Gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/admin/Documents/GitHub/gatsby-boilerplate/Gatsby/src/pages/404.tsx"))),
  "component---src-pages-index-old-js": hot(preferDefault(require("/Users/admin/Documents/GitHub/gatsby-boilerplate/Gatsby/src/pages/index-old.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/admin/Documents/GitHub/gatsby-boilerplate/Gatsby/src/pages/index.tsx"))),
  "component---src-pages-page-tsx": hot(preferDefault(require("/Users/admin/Documents/GitHub/gatsby-boilerplate/Gatsby/src/pages/page.tsx"))),
  "component---src-pages-post-tsx": hot(preferDefault(require("/Users/admin/Documents/GitHub/gatsby-boilerplate/Gatsby/src/pages/post.tsx")))
}

