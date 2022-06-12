import { Link } from "gatsby"
import * as React from "react"

type HeaderProps = {
}

const Header = ({ }: HeaderProps) => {
    // TODO: parameterlize
    const siteName = "Yucchiy's Note"
    return (
        <div className="container max-w-3xl mx-auto mb-10 mt-10">
            <h3 className="text-2xl font-bold text-center ">
                <Link className="hover:no-underline text-gray-900 font-serif" to="/">{siteName}</Link>
            </h3>
        </div>
    )
}

export default Header