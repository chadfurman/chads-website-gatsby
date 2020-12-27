import * as dayjs from "dayjs";
import * as React from "react";

function Job({company, startDateTime, endDateTime, ...props}) {
    return <section className="my-5">
        <header className="mb-1">
            <h2>{company}</h2>
            <time dateTime={startDateTime}>{dayjs(startDateTime).format('MMMM YYYY')}</time>
            <strong className="text-xl font-bold mx-2">-</strong>
            <time dateTime={endDateTime}>{dayjs(endDateTime).format('MMMM YYYY')}</time>
        </header>
        <section>
            <ul className="list-disc list-inside sm:list-outside">
                {props.children}
            </ul>
        </section>
    </section>;
}

export default Job