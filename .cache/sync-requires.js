const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/admin/Documents/GitHub/react-shop/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/admin/Documents/GitHub/react-shop/src/pages/404.js"))),
  "component---src-pages-index-old-js": hot(preferDefault(require("/Users/admin/Documents/GitHub/react-shop/src/pages/index-old.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/admin/Documents/GitHub/react-shop/src/pages/index.tsx"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/admin/Documents/GitHub/react-shop/src/pages/page-2.js")))
}

