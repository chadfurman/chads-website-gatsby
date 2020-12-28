import * as React from "react"

const Sidebar = () => {
    return (
        <aside className="p-6 sm:h-screen sm:fixed flex flex-col flex-grow-0 text-gray-500 bg-white bg-opacity-5 sm:max-w-xxs">
            <header className="mx-auto sm:mx-none"><h1><a href="/">CHAD FURMAN</a></h1></header>
            <nav className="sm:flex-col text-gray-500 sm:space-y-3 flex mt-auto mx-auto sm:mx-none pt-10 space-x-10 sm:pb-20 sm:space-x-0 sm:space-y-20">
                <a href="/blog">BLOG</a>
                <a href="/experience">EXP.</a>
                <a href="/email">EMAIL</a>
            </nav>
        </aside>
    )
}

export default Sidebar