import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';

import '../styles/tags.scss';

interface TagGroup {
  fieldValue: string;
  totalCount: number;
}

interface TagsPageData {
  allMdx: {
    group: TagGroup[];
  };
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const TagsPage: React.FC<PageProps<TagsPageData>> = ({ data }) => {
  const { group } = data.allMdx;

  return (
    <Layout>
      <div className="tag">
        <h1 className="tag__header">#Tags</h1>
        {group.map(tag => (
          <li className="tag__item" key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} | {tag.totalCount}
            </Link>
          </li>
        ))}
      </div>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
        totalCount
      }
    }
  }
`;
