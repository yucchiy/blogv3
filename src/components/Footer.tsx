import { Link } from "gatsby";
import * as React from "react"

const Footer = () => {
    return (
        <footer className="container max-w-3xl mx-auto mt-10">
            <div className="flex justify-center gap-6">
                <Link to="/">ホーム</Link>
                <Link to="/">このページについて</Link>
                <Link to="/">プロフィール</Link>
                <Link to="/">Unity Weekly</Link>
            </div>
        </footer>
    )
}

export default Footer