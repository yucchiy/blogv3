import * as React from "react"
import { graphql, Link }  from "gatsby"
import Layout from "../components/Layout"
import { IndexPageQuery } from "../../graphql-types"
import PostListElement from "../components/PostListElement"

type IndexPageProps = {
  data: IndexPageQuery;
}

export default function Template({data}: IndexPageProps ) {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({node}) => {
        if (node.fields == null || node.fields?.slug == null ||
            node.frontmatter == null || node.frontmatter.date == null || node.frontmatter.title == null) {
          return(
            <div/>
          )
        }

        const tags = node.frontmatter.tags || []

        return (
          <PostListElement
            title={node.frontmatter.title}
            slug={node.fields.slug}
            description={node.frontmatter.description}
            published={node.frontmatter.date}
            tags={tags}
          />
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(
      filter: { frontmatter: { type: { ne: "page" } } },
      sort: {fields: frontmatter___date, order: DESC},
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            title
            tags
          }
        }
      }
    }
  }
`
