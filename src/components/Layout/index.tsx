import * as React from "react"

export interface LayoutProps {
    children: JSX.Element | JSX.Element[]
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="bg-white flex flex-col sm:flex-row flex-grow h-full bg-pond bg-lotus bg-fixed bg-right-bottom bg-no-repeat w-full">
            {children}
        </div>
    )
}

export default Layout
