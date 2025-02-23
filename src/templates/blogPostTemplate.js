import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/layout'
import SEO from '../components/SEO'

import './blogPostTemplate.scss'

const components = {
  // Add any custom components you use in MDX here
  p: props => <p {...props} />,
  h1: props => <h1 {...props} />,
  h2: props => <h2 {...props} />,
  // ... other components
}

const BlogPostTemplate = ({ data, pageContext, children }) => {
  const post = data.mdx
  const { frontmatter } = post
  const { slug } = post.fields
  const { title, date, info, tags, image } = frontmatter
  const { previous, next } = pageContext

  const imageURL = (image && image.publicURL) || ''

  return (
    <Layout>
      <SEO title={title} description={info} type="article" imagePath={imageURL} slug={slug} />
      
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
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
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
`