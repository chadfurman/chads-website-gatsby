import * as React from "react"
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import BlogPost from "../components/BlogPost";
import {graphql} from "gatsby";

export interface PostPageProps {
    data: {
        contentfulBlogPost: {
            title: string,
            createdAt: string,
            body: {
                childMarkdownRemark: {
                    html: string
                }
            }
        }
    }
}

const PostPage = ({data}: PostPageProps) => {
    return (
        <Layout>
            <Sidebar/>
            <Page headerText="POST">
                <BlogPost postTitle={data.contentfulBlogPost.title} postDate={data.contentfulBlogPost.createdAt} rawPostHtml={data.contentfulBlogPost.body.childMarkdownRemark.html} noLink />
            </Page>
        </Layout>
    )
}

export const query = graphql`
    query PostQuery ($id: String!) {
        contentfulBlogPost(contentful_id: {eq: $id}) {
            title
            createdAt
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`

export default PostPage