import { Link, useStaticQuery, graphql } from "gatsby"
import * as React from "react"

type HeaderProps = {
}

const Header = ({ }: HeaderProps) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const siteName = data.site.siteMetadata.title
    return (
        <div className="container max-w-3xl mx-auto pb-10 pt-10">
            <h3 className="text-2xl font-bold text-center">
                <Link className="hover:no-underline text-gray-900 font-serif" to="/">{siteName}</Link>
            </h3>
        </div>
    )
}

export default Header