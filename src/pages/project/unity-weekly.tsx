import * as React from "react"
import { graphql }  from "gatsby"
import Layout from "../../components/Layout"
import { UnityWeeklyListPageQuery } from "../../../graphql-types"
import PostListElement from "../../components/PostListElement"

type UnityWeeklyListPageProps = {
  data: UnityWeeklyListPageQuery
}

export default function Template({data}: UnityWeeklyListPageProps ) {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-2xl font-bold mb-4">Unity Weekly</h1>
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
              published={node.frontmatter.date}
              tags={tags}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query UnityWeeklyListPage {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      filter: { frontmatter: { type: { eq: "unity-weekly" } } }
    ) {
      edges {
        node {
          id
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
