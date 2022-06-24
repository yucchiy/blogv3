import * as React from "react"
import { graphql, Link }  from "gatsby"
import Layout from "../components/Layout"
import { TagListQuery } from "../../graphql-types"
import kebabCase from "lodash/kebabCase"

type TagListPageProps = {
  data: TagListQuery;
}

export default function Template({data}: TagListPageProps ) {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold mb-4 mx-6">タグ一覧</h1>
          <ul className="list-disc list-inside">
              {data.allMarkdownRemark.group.map((tag) => {
                  return(
                      <li className="mb-2" key={tag.fieldValue}>
                        <Link to={`/tags/${kebabCase(tag.fieldValue || "")}/`}>
                            {tag.fieldValue} ({tag.totalCount})
                        </Link>
                      </li>
                  )
              })}
          </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagList {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
