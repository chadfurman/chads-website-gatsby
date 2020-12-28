import * as React from "react"
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import BlogPost from "../components/BlogPost";
import {graphql} from "gatsby";

const BlogPage = ({data}) => {
    const posts = data.allContentfulBlogPost.edges
    return (
        <Layout>
            <Sidebar/>
            <Page headerText='BLOG'>
                { posts.map((p) => {
                    return (
                        <BlogPost postTitle={p.node.title} postDate={p.node.createdAt} postSlug={p.node.slug} key={p.node.contentful_id} >
                            {p.node.body.childMarkdownRemark.excerpt}
                        </BlogPost>
                    )
                })}
            </Page>
        </Layout>
    )
}


export const query = graphql`
    query AllBlogPost {
        allContentfulBlogPost {
            edges {
                node {
                    contentful_id
                    title
                    slug
                    createdAt
                    body {
                        childMarkdownRemark {
                            id
                            excerpt
                        }
                    }
                }
            }
        }
    }
`
export default BlogPage
