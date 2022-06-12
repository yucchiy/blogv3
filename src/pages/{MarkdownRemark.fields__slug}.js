import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4">
        <article className="blog-post">
          <header className="pb-4">
            <time className="text-sm text-gray-500">{frontmatter.date}</time>
            <h1 className="text-2xl font-semibold text-gray-700">{frontmatter.title}</h1>
          </header>
          <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        title
      }
    }
  }
`
