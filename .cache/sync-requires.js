const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/marcos/code/marcoscannabrava/FightPandemics/src/templates/blog-post.js"))),
  "component---src-templates-index-page-js": hot(preferDefault(require("/home/marcos/code/marcoscannabrava/FightPandemics/src/templates/index-page.js"))),
  "component---src-templates-product-page-js": hot(preferDefault(require("/home/marcos/code/marcoscannabrava/FightPandemics/src/templates/product-page.js"))),
  "component---src-templates-about-page-js": hot(preferDefault(require("/home/marcos/code/marcoscannabrava/FightPandemics/src/templates/about-page.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/home/marcos/code/marcoscannabrava/FightPandemics/src/templates/tags.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/marcos/code/marcoscannabrava/FightPandemics/src/pages/404.js"))),
  "component---src-pages-blog-index-js": hot(preferDefault(require("/home/marcos/code/marcoscannabrava/FightPandemics/src/pages/blog/index.js"))),
  "component---src-pages-contact-examples-js": hot(preferDefault(require("/home/marcos/code/marcoscannabrava/FightPandemics/src/pages/contact/examples.js"))),
  "component---src-pages-contact-file-upload-js": hot(preferDefault(require("/home/marcos/code/marcoscannabrava/FightPandemics/src/pages/contact/file-upload.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("/home/marcos/code/marcoscannabrava/FightPandemics/src/pages/contact/index.js"))),
  "component---src-pages-contact-thanks-js": hot(preferDefault(require("/home/marcos/code/marcoscannabrava/FightPandemics/src/pages/contact/thanks.js"))),
  "component---src-pages-tags-index-js": hot(preferDefault(require("/home/marcos/code/marcoscannabrava/FightPandemics/src/pages/tags/index.js")))
}

