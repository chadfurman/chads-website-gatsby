import * as React from "react"

export interface PageProps {
    headerText?: string,
    children: JSX.Element[] | JSX.Element
}

const Page = ({headerText, ...props}: PageProps) => {
    const header = <header className="flex text-right text-2xl mt-10 mr-10 w-full hidden sm:block">{headerText}</header>
    return (
        <main className="flex bg-blur border-0 md:border-2 border-opacity-25 border-gray-500 flex-grow flex-col px-5 sm:px-20 relative bg-pond bg-opacity-80 text-shadow text-gray-500 mt-10 sm:m-10 backdrop-blur md:max-w-3xl">
            { headerText ? header : null }
            { props.children }
        </main>
    )
}

export default Page
