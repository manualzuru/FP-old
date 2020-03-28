// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-index-page-js": () => import("./../src/templates/index-page.js" /* webpackChunkName: "component---src-templates-index-page-js" */),
  "component---src-templates-about-page-js": () => import("./../src/templates/about-page.js" /* webpackChunkName: "component---src-templates-about-page-js" */),
  "component---src-templates-blog-post-js": () => import("./../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-product-page-js": () => import("./../src/templates/product-page.js" /* webpackChunkName: "component---src-templates-product-page-js" */),
  "component---src-templates-tags-js": () => import("./../src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-index-js": () => import("./../src/pages/blog/index.js" /* webpackChunkName: "component---src-pages-blog-index-js" */),
  "component---src-pages-contact-examples-js": () => import("./../src/pages/contact/examples.js" /* webpackChunkName: "component---src-pages-contact-examples-js" */),
  "component---src-pages-contact-file-upload-js": () => import("./../src/pages/contact/file-upload.js" /* webpackChunkName: "component---src-pages-contact-file-upload-js" */),
  "component---src-pages-contact-index-js": () => import("./../src/pages/contact/index.js" /* webpackChunkName: "component---src-pages-contact-index-js" */),
  "component---src-pages-contact-thanks-js": () => import("./../src/pages/contact/thanks.js" /* webpackChunkName: "component---src-pages-contact-thanks-js" */),
  "component---src-pages-tags-index-js": () => import("./../src/pages/tags/index.js" /* webpackChunkName: "component---src-pages-tags-index-js" */)
}

