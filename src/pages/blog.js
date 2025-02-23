import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import BlogList from '../templates/blogList'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Blog Posts by Aaron Lau"
      description="Blog Posts by Aaron Lau"
    />
    <BlogList data={data} templateTitle="Articles" />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            info
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
