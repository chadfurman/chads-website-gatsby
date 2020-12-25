import * as React from 'react'
import {Container} from "../Components/Container/Container";
import {PageContent} from "../Components/PageContent";
import {Sidebar} from "../Components/Sidebar";
import {PageHeader} from "../Components/PageHeader";
import {PageBody} from "../Components/PageBody";

export const HomePage = () => {
    return (
        <Container>
            <Sidebar activePage="/" />
            <PageContent>
                <PageHeader>Home</PageHeader>
                <PageBody>
                    <section>
                        <h2>A Sub-Heading</h2>
                        <p>
                            Some content that goes below the sub-heading.
                            This is probably a few sentences of text.
                            Maybe more.  Ideally, though, if it were more, it would be spread across several paragraphs blocks.
                        </p>
                    </section>
                </PageBody>
            </PageContent>
        </Container>
    )
}