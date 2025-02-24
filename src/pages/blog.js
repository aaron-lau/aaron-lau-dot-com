import React from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/Seo'
import Layout from '../components/layout'
import BlogList from '../templates/blogList'

const IndexPage = ({ data }) => (
  <Layout>
    <Seo
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
