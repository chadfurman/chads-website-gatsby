import * as dayjs from "dayjs";
import * as React from "react";

export interface BlogPostProps {
    postTitle: string,
    postDate: string,
    postSlug?: string,
    noLink?: boolean,
    rawPostHtml?: string,
    children?: JSX.Element | JSX.Element[] | string
}

function BlogPost({postTitle, postSlug, postDate, rawPostHtml, noLink, ...props}: BlogPostProps) {
    const innerContent = (
        rawPostHtml
            ? <section dangerouslySetInnerHTML={{__html: rawPostHtml}}/>
            : <section>
                {props.children}
            </section>
    )
    const body = (
        <article className="flex flex-col">
            <header className="mb-5 max-w-sm overflow-ellipsis">
                <h2>{postTitle}</h2>
                <time dateTime={postDate}>{dayjs(postDate).format('dddd D, MMMM YYYY')}</time>
            </header>
            {innerContent}
        </article>
    )

    if (noLink) {
        return body
    } else {
        return (
            <a href={`/post/${postSlug}`} className="flex p-5 pt-1 flex-col hover:bg-pond-light hover:bg-opacity-10">
                {body}
            </a>
        )
    }
}

export default BlogPost