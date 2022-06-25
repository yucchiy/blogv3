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
        <footer className="mt-20 bg-gray-800 px6 py-8">
            <div className="container max-w-3xl mx-auto">
                <div className="flex justify-center mb-6 text-sm hover:no-underline gap-6">
                    {links.map(link => {
                        return(
                            <Link className="text-gray-300 hover:underline" to={link.to}>{link.text}</Link>
                        )
                    })}
                </div>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-700" />
            <span className="block text-sm text-center text-gray-400">© 2022 Yucchiy's Note. All Rights Reserved.</span>
        </footer>
    )
}

export default Footer