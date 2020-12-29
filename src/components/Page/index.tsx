import * as React from "react"

export interface PageProps {
    headerText?: string,
    children: JSX.Element[] | JSX.Element
}

const Page = ({headerText, ...props}: PageProps) => {
    const header = <header className="flex text-right text-2xl md:my-5 mr-10 w-full hidden sm:block">{headerText}</header>
    return (
        <main className="
        relative
        flex
        flex-grow
        flex-col
        bg-blur
        backdrop-blur
        border-0
        border-opacity-25
        border-gray-500
        bg-pond
        bg-opacity-80
        text-shadow
        text-gray-200
        mt-5
        sm:ml-40
        sm:px-10
        md:border-2
        md:px-20
        md:ml-52
        md:m-10
        md:max-w-3xl">
            { headerText ? header : null }
            { props.children }
        </main>
    )
}

export default Page
