import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="container mx-auto max-w-2xl">
      <article className="blog-post">
        <header>
          <time className="text-gray-500">{frontmatter.date}</time>
          <h1>{frontmatter.title}</h1>
        </header>
        <div
            className="prose prose-stone"
            dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`