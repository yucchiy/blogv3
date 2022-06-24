import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"
import defaultImage from "../images/defaultImage.png"

type SEOProps = {
    title?: string,
    description?: string,
    url?: string,
    eyecatchImage?: string,
}

const SEO = ({
    title,
    description,
    url,
    eyecatchImage,
}: SEOProps) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    siteLang
                    defaultDescription
                    twitterCard
                }
            }
        }
    `)

    const siteName = data.site.siteMetadata.title
    const siteBaseUrl = data.site.siteMetadata.siteUrl
    const defaultDescription = data.site.siteMetadata.defaultDescription
    const defaultUrl = "/"
    const twitterSite = data.site.siteMetadata.twitterCard
    const siteLang = data.site.siteMetadata.siteLang

    const metaTitle = title ? `${title} | ${siteName}` : siteName;
    const metaDescription = description || defaultDescription;
    const metaUrl = url ? `${siteBaseUrl}${url}` : `${siteBaseUrl}${defaultUrl}`
    const metaImage = eyecatchImage ? `${siteBaseUrl}${eyecatchImage}` : `${siteBaseUrl}${defaultImage}` 
    const metaTwitterCard = eyecatchImage ? "summary_large_image" : "summary" 

    return (
        <Helmet
            htmlAttributes={
                {
                    lang: siteLang
                }
            }
            title={metaTitle}
            meta={[
                { name: 'description', content: metaDescription },
                { name: 'og:title', content: metaTitle },
                { name: 'og:description', content: metaDescription },
                { name: 'og:url', content: metaUrl },
                { name: 'og:image', content: metaImage },
                { name: 'twitter:card', content: metaTwitterCard },
                { name: 'twitter:site', content: twitterSite },
                { name: 'twitter:image', content: metaImage },
            ]}
        >
        </Helmet>
    )
}

export default SEO