import { Link } from "gatsby"
import * as React from "react"
import kebabCase from "lodash/kebabCase"
import Container from "./Container"

type PostListElementProps = {
    title: string,
    slug: string,
    description: string,
    published?: any,
    tags?: Array<string | null>,
}

const PostListElement = ({ title, slug, description, published, tags }: PostListElementProps ) => {
    tags = tags || []

    return (
    <div className="mb-6 last:mb-0">
        <Container>
            <Link
                className="block hover:no-underline"
                to={slug}>
                <time className="block text-sm text-gray-500 mb-1">{published}</time>
                <span className="block text-gray-700 font-semibold mb-1">{title}</span>
                <p className="text-sm text-gray-500 mb-2">{description}</p>
                <div className="flex flex-wrap justify-start gap-2">
                    {tags.map((tag) => {
                        return (
                            <Link
                                className="px-4 py-2 border border-orange-600 text-orange-600 font-medium text-xs leanding-tight rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:no-underline"
                                to={`/tags/${kebabCase(tag || "")}/`}>{tag}</Link>
                        )
                    })}
                </div>
            </Link>
        </Container>
    </div>
    )
}

export default PostListElement