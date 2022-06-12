import * as React from "react"
import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import SEO from "./SEO"

type LayoutProps = {
    children: ReactNode,
    title?: string
    description?: string
    url?: string
    eyecatchImage?: string
}

const Layout = ({ children, title, description, url, eyecatchImage }: LayoutProps) => {
    return (
        <div>
            <SEO
                title={title}
                description={description}
                url={url}
                eyecatchImage={eyecatchImage}
            />
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout