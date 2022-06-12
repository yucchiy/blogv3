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
    // TODO: parameterlize
    const siteName = "Yucchiy's Note"
    const siteBaseUrl = "https://blog.yucchiy.com"
    const defaultDescription = ""
    const defaultUrl = "/"
    const twitterSite = "@yucchiy_"
    const siteLang = "ja"

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
        />
    )
}

export default SEO