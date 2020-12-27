import * as dayjs from "dayjs";
import * as React from "react";

function BlogPost({postTitle, postDate, nolink, ...props}) {
    const body = (
        <article className="flex flex-col">
            <header className="mb-5 max-w-sm overflow-ellipsis">
                <h2>{postTitle}</h2>
                <time dateTime={postDate}>{dayjs(postDate).format('dddd D, MMMM YYYY')}</time>
            </header>
            <section>
                {props.children}
            </section>
        </article>
    )

    if (nolink) {
        return body
    } else {
        return (
            <a href="/post" className="flex p-5  flex-col hover:bg-pond-light hover:bg-opacity-10">
                {body}
            </a>
        )
    }
}

export default BlogPost