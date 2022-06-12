import { graphql } from "gatsby";
import React from "react";
import { TagPageQuery } from "../../graphql-types";
import Layout from "../components/Layout";
import PostListElement from "../components/PostListElement";

type TagPageProps = {
  data: TagPageQuery,
  pageContext: any,
}

export default function Template({data, pageContext}: TagPageProps ) {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-2xl font-bold mb-4">{pageContext.tag}の記事一覧</h1>
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
  query TagPage($tag: String!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
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
