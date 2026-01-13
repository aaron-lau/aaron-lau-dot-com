import React, { ReactNode } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import Layout from '../components/layout';
import Seo from '../components/Seo';

import './blogPostTemplate.scss';

const components = {
  h1: (props: any) => <h1 {...props} />,
  h2: (props: any) => <h2 {...props} />,
  p: (props: any) => <p {...props} />,
};

interface BlogPostNode {
  id?: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
}

interface BlogPostPageContext {
  slug: string;
  previous: BlogPostNode | null;
  next: BlogPostNode | null;
}

interface BlogPostData {
  mdx: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      date: string;
      info: string;
      image?: {
        publicURL: string;
      };
      tags: string[];
    };
  };
}

interface BlogPostTemplateProps extends PageProps<BlogPostData, BlogPostPageContext> {
  children: ReactNode;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data, pageContext, children }) => {
  const post = data.mdx;
  const { frontmatter } = post;
  const { slug } = post.fields;
  const { title, date, info, tags, image } = frontmatter;
  const { previous, next } = pageContext;

  const imageURL = (image && image.publicURL) || '';

  return (
    <Layout>
      <Seo title={title} description={info} type="article" imagePath={imageURL} slug={slug} />

      <article className="blog">
        <header>
          <div className="blog__meta">
            <span>{date} </span>
          </div>
          <h1 className="blog__title">{title}</h1>
          <h2 className="blog__info">{info}</h2>
          <div className="blog__tags">
            {tags.map(tag => (
              <Link key={tag} to={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </div>
        </header>

        <main className="blog-body" style={{ maxWidth: '800px', margin: 'auto' }}>
          <MDXProvider components={components}>
            {children}
          </MDXProvider>
        </main>
      </article>

      <hr className="blog__divider" />

      <section className="read-more">
        {previous && (
          <Link className="btn btn--full btn--hover" to={previous.fields.slug}>
            « &nbsp;
            {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link className="btn btn--full btn--hover" to={next.fields.slug}>
            {next.frontmatter.title}
            &nbsp; »
          </Link>
        )}
      </section>
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        info
        image {
          publicURL
        }
        tags
      }
    }
  }
`;
