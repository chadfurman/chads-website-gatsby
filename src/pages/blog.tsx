import * as React from "react"
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import BlogPost from "../components/BlogPost";

const BlogPage = () => {
    return (
        <Layout>
            <Sidebar/>
            <Page headerText='BLOG'>
                <BlogPost postTitle='Post Title' postDate='2020/12/24'>
                    This is text of a post. It only goes so far. After a little bit the text will get cut off. Until that point I will misspell works and typos and such because I can and I’m lazy. This...
                </BlogPost>
                <BlogPost postTitle='Post Title' postDate='2020/12/24'>
                    This is text of a post. It only goes so far. After a little bit the text will get cut off. Until that point I will misspell works and typos and such because I can and I’m lazy. This...
                </BlogPost>
                <BlogPost postTitle='Post Title' postDate='2020/12/24'>
                    This is text of a post. It only goes so far. After a little bit the text will get cut off. Until that point I will misspell works and typos and such because I can and I’m lazy. This...
                </BlogPost>
            </Page>
        </Layout>
    )
}

export default BlogPage
