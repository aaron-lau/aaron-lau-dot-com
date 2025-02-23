import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/SEO'

import './blogPostTemplate.scss'

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx
  let { frontmatter } = post
  let { slug } = post.fields
  let { title, date, info, tags, image } = frontmatter
  let { previous, next } = pageContext

  const imageURL = (image && image.publicURL) || ''

  return (
    <Layout>
      <SEO title={title} description={info} type="article" imagePath={imageURL} slug={slug} />
      
      <Helmet>
        {/* Use template literals for the JSON-LD script */}
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "Article",
            "headline": "${title.replace(/"/g, '\\"')}",
            "datePublished": "${date}",
            "author": {
              "@type": "Person",
              "name": "Aaron Lau"
            },
            "image": "${`https://blog.aaron-lau.com${imageURL}`}"
          }
        `}</script>
      </Helmet>

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
          <MDXRenderer>{post.body}</MDXRenderer>
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