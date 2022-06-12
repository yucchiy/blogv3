const { createFilePath } = require(`gatsby-source-filesystem`)

const path = require("path")
const _ = require("lodash")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const relativePath = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: relativePath
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      tagsGroup: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve("src/templates/tag.tsx"),
      context: {
        tag: tag.fieldValue,
      }
    })
  });
}