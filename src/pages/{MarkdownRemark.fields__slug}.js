import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html, fields, excerpt } = markdownRemark
  const tags = frontmatter.tags || []

  const description = frontmatter.description || excerpt
  const isPage = frontmatter.type ? frontmatter.type === "page" : false

  return (
    <Layout
      title = {frontmatter.title}
      description = {description}
      url = {fields.slug}
      eyecatchImage = {frontmatter.eyecatch?.publicURL}
    >
      <div className="container mx-auto max-w-3xl px-4">
        <article>
          <header className="pb-4">
            {isPage ?
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">{frontmatter.title}</h1>
              </div> :
              <div>
                <time className="text-sm text-gray-500 mb-1">{frontmatter.date}</time>
                <h1 className="text-xl font-semibold text-gray-700 mb-1">{frontmatter.title}</h1>
                <div class="flex justify-start gap-2">
                  <span className="text-sm text-gray-500">Tags: </span>
                  {tags.map((tag) => {
                    return (
                      <Link to={`/tags/${tag}`} className="text-sm text-gray-400">{tag}</Link>
                    )
                  })}
                </div>
              </div>
            }
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
      excerpt(pruneLength: 250)
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        type
        tags
        title
        description
        eyecatch {
          publicURL
        }
      }
    }
  }
`
