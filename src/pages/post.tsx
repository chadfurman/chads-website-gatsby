import * as React from "react"
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import BlogPost from "../components/BlogPost";

const PostPage = () => {
    return (
        <Layout>
            <Sidebar/>
            <Page headerText="POST">
                <BlogPost postTitle="Post Title" postDate="12/24/2020" nolink>
                    <p>This is text of a post. It only goes so far. After a little bit the text will get cut off.
                        Until that
                        point I will misspell works and typos and such because I can and I’m lazy. This is the rest
                        of the
                        post. Are you happy you showed up? Let me repeat myself.</p>
                    <p>This is text of a post. It only goes so far. After a little bit the text will get cut off.
                        Until that
                        point I will misspell works and typos and such because I can and I’m lazy. This is the rest
                        of the
                        post. Are you happy you showed up? Let me repeat myself.</p>
                    <p>This is text of a post. It only goes so far. After a little bit the text will get cut off.
                        Until that
                        point I will misspell works and typos and such because I can and I’m lazy. This is the rest
                        of the
                        post. Are you happy you showed up? Let me repeat myself.</p>
                    <p>This is text of a post. It only goes so far. After a little bit the text will get cut off.
                        Until that
                        point I will misspell works and typos and such because I can and I’m lazy. This is the rest
                        of the
                        post. Are you happy you showed up? Let me repeat myself.</p>
                    <p>And this is the end. Thank you for staying.</p>
                </BlogPost>
            </Page>
        </Layout>
    )
}

export default PostPage