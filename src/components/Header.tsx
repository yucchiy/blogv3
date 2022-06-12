import * as React from "react"

type HeaderProps = {
}

const Header = ({ }: HeaderProps) => {
    return (
        <div className="container max-w-3xl mx-auto mb-10 mt-10">
            <h3 className="text-2xl font-bold text-center font-serif">
                Yucchiy's Note
            </h3>
        </div>
    )
}

export default Header