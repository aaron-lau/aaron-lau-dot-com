import React from 'react'
import Layout from '../components/layout'

import { graphql, PageProps } from 'gatsby'
import BlogList from './blogList'
import Seo from '../components/Seo'

interface TagPageContext {
  tag: string
}

interface TagsData {
  allMdx: {
    totalCount: number
    edges: Array<{
      node: {
        id: string
        frontmatter: {
          title: string
          date: string
          info: string
        }
        fields: {
          slug: string
        }
      }
    }>
  }
}

const Tags: React.FC<PageProps<TagsData, TagPageContext>> = ({ pageContext, data }) => {
  const { tag } = pageContext

  return (
    <Layout>
      <Seo title={`Filter blog posts by ${tag}`} description="Filtered blog post according to tags" />
      <BlogList data={data} templateTitle={`#${tag}`} />
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(limit: 2000, sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            info
          }
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
