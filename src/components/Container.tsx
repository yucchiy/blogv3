import React from "react";
import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode,
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="container bg-white rounded shadow hover:shadow-md mx-auto p-6">{children}</div>
    )
}

export default Container 