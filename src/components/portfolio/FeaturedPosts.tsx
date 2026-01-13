import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import './posts.scss';

interface PostNode {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    info: string;
  };
}

interface PostEdge {
  node: PostNode;
}

interface FeaturedPostsData {
  allMdx: {
    edges: PostEdge[];
  };
}

function FeaturedPosts() {
  const data = useStaticQuery<FeaturedPostsData>(graphql`
    query {
      allMdx(
        filter: {frontmatter: {featured: {eq: true}}}
        sort: {frontmatter: {date: DESC}}
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              info
            }
          }
        }
      }
    }
  `);

  return (
    <section className="blog">
      <h2 className="portfolio__header">Featured Posts</h2>
      <h3 className="portfolio__sub-header">I write about stuff sometimes</h3>
      {data.allMdx.edges.map((post) => (
        <Link key={post.node.id} to={post.node.fields.slug} className="post">
          <h3 className="post__title">
            <span className='animated-underline'>
              {post.node.frontmatter.title}
            </span>
          </h3>
          <p className="post__description">{post.node.frontmatter.info}</p>
        </Link>
      ))}
      <br></br>
      <p>
        Read more such
        <Link className="animated-underline" to="/blog/"> post here</Link>
      </p>
    </section>
  );
}

export default FeaturedPosts;
