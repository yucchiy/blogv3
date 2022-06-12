import * as React from "react"
import { graphql, Link }  from "gatsby"
import Layout from "../components/Layout"
import { IndexPageQuery } from "../../graphql-types"

type IndexPageProps = {
  data: IndexPageQuery;
}

export default function Template({data}: IndexPageProps ) {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4">
        {data.allMarkdownRemark.edges.map(({node}) => {
          if (node.fields == null || node.fields?.slug == null ||
              node.frontmatter == null || node.frontmatter.date == null || node.frontmatter.title == null) {
            return(
              <div/>
            )
          }

          const tags = node.frontmatter.tags || []

          return (
          <div className="mb-6">
            <time className="block text-sm text-gray-500 mb-1">{node.frontmatter.date}</time>
            <Link className="hover:no-underline" to={node.fields.slug}><span className="block text-gray-700 mb-1">{node.frontmatter.title}</span></Link>
            <div className="flex justify-start gap-2">
              <span className="text-sm text-gray-500">Tags: </span>
              {tags.map((tag) => {
                return (
                  <Link to={`/tags/${tag}`} className="text-sm text-gray-400">{tag}</Link>
                )
              })}
            </div>
          </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
