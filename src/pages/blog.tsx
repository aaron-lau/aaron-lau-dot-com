import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/layout';
import BlogList from '../templates/blogList';

interface BlogPageData {
  allMdx: {
    totalCount: number;
    edges: Array<{
      node: {
        id: string;
        frontmatter: {
          title: string;
          date: string;
          info: string;
          tags: string[];
        };
        fields: {
          slug: string;
        };
        excerpt: string;
      };
    }>;
  };
}

const IndexPage: React.FC<PageProps<BlogPageData>> = ({ data }) => (
  <Layout>
    <Seo
      title="Blog Posts by Aaron Lau"
      description="Blog Posts by Aaron Lau"
    />
    <BlogList data={data} templateTitle="Articles" />
  </Layout>
);

export default IndexPage;

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
`;
