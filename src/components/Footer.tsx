import { Link }  from "gatsby";
import * as React from "react"


type FooterLink = {
    text: string,
    to: string,
}

type FooterProps = {
    links: Array<FooterLink>
}

const Footer = ({ links }: FooterProps ) => {
    return (
        <footer className="container max-w-3xl mx-auto pt-10 pb-10">
            <div className="flex justify-center gap-6">
                {links.map(link => {
                    return(
                        <Link className="hover:no-underline text-gray-800" to={link.to}>{link.text}</Link>
                    )
                })}
            </div>
        </footer>
    )
}

export default Footer