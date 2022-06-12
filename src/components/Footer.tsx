import { Link } from "gatsby";
import * as React from "react"

const Footer = () => {
    return (
        <footer className="container max-w-3xl mx-auto mt-10 mb-10">
            <div className="flex justify-center gap-6">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/project/unity-weekly">Unity Weekly</Link>
            </div>
        </footer>
    )
}

export default Footer