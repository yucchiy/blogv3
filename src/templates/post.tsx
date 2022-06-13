import { graphql, Link } from "gatsby";
import React from "react";
import { PostPageQuery } from "../../graphql-types";
import Layout from "../components/Layout";
import kebabCase from "lodash/kebabCase"
import Container from "../components/Container";

type PostPageProps = {
  data: PostPageQuery,
}

export default function Template({data}: PostPageProps ) {
  const frontmatter = data.markdownRemark!.frontmatter!
  const excerpt = data.markdownRemark!.excerpt!
  const fields = data.markdownRemark!.fields!
  const html = data.markdownRemark!.html!

  const isPage = frontmatter.type ? frontmatter.type === "page" : false
  const tags = frontmatter.tags || []

  return (
    <Layout
      title = {frontmatter.title!}
      description = {frontmatter.description || excerpt}
      url = {fields.slug!}
      eyecatchImage = {frontmatter.eyecatch?.publicURL !== null ? frontmatter.eyecatch?.publicURL : undefined}
    >
      <Container>
        <article>
          <header className="mb-6">
            {isPage ?
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">{frontmatter.title}</h1>
              </div> :
              <div>
                <time className="text-sm text-gray-500 mb-1">{frontmatter.date}</time>
                <h1 className="text-xl font-semibold text-gray-700 mb-1">{frontmatter.title}</h1>
                <div className="flex flex-wrap justify-start gap-2">
                  <span className="text-sm text-gray-500">Tags: </span>
                  {tags.map((tag) => {
                    return (
                      <Link to={`/tags/${kebabCase(tag || "")}/`} className="text-sm text-gray-400">{tag}</Link>
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

      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostPage($id: String!) {
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
