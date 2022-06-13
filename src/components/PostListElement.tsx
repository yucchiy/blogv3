import { Link } from "gatsby"
import * as React from "react"
import kebabCase from "lodash/kebabCase"
import Container from "./Container"

type PostListElementProps = {
    title: string,
    slug: string,
    published?: any,
    tags?: Array<string | null>,
}

const PostListElement = ({ title, slug, published, tags }: PostListElementProps ) => {
    tags = tags || []

    return (
    <div className="mb-6 last:mb-0">
        <Container>
            <time className="block text-sm text-gray-500 mb-1">{published}</time>
            <Link className="hover:no-underline" to={slug}><span className="block text-gray-700 mb-1">{title}</span></Link>
            <div className="flex justify-start gap-2">
                <span className="text-sm text-gray-500">Tags: </span>
                {tags.map((tag) => {
                    return (
                        <Link className="text-sm text-gray-400" to={`/tags/${kebabCase(tag || "")}/`}>{tag}</Link>
                    )
                })}
            </div>
        </Container>
    </div>
    )
}

export default PostListElement