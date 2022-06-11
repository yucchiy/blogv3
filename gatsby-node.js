const { createFilePath } = require(`gatsby-source-filesystem`)

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