/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

const { createFilePath } = require("gatsby-source-filesystem")

const PostTemplate = path.resolve("./src/templates/post-template.js")
const BlogTemplate = path.resolve("./src/templates/blog-template.js")
// const ProductTemplate = path.resolve("./src/templates/product-template.js")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //allows us to easily request all our markdown data
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node: post }) => {
    createPage({
      path: `posts${post.fields.slug}`,
      component: PostTemplate,
      context: {
        slug: post.fields.slug,
      },
    })
  })

  const postsPerPage = 6
  const totalPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: totalPages }).forEach((_, index) => {
    const currentPage = index + 1

    const isFirstPage = index === 0
    const isLastPage = currentPage === totalPages

    createPage({
      path: isFirstPage ? "/blog" : `/blog/${currentPage}`,
      component: BlogTemplate,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        isFirstPage,
        isLastPage,
        currentPage,
        totalPages,
      },
    })
  })
}
