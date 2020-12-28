const path = require('path')

exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve('src/templates/post.tsx')
    return graphql(`
        query AllBlogPost {
          allContentfulBlogPost(limit:10) {
            edges {
              node {
                contentful_id
                slug
              }
            }
          }
        }
    `).then(result => {
       if (result.errors) {
           throw result.errors
       }

       result.data.allContentfulBlogPost.edges.forEach(edge => {
           createPage({
               path: `/post/${edge.node.slug}`,
               component: blogPostTemplate,
               context: {
                   id: `${edge.node.contentful_id}`
               }
           })
       })
    })

}