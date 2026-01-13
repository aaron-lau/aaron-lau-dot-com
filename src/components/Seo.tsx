import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
  description?: string;
  lang?: string;
  keywords?: string[];
  title: string;
  type?: 'website' | 'article';
  imagePath?: string;
  slug?: string;
}

function Seo({
  description,
  lang = 'en',
  keywords = ['Web Development', 'Data Engineer', 'Software Developer', 'javascript', 'CSS', 'blog'],
  title,
  type = 'website',
  imagePath,
  slug
}: SeoProps) {
  const { site, allFile } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author {
              name
            }
            social {
              twitter
            }
          }
        }
        allFile(filter: { name: { eq: "Logo-Square" } }) {
          edges {
            node {
              publicURL
              name
            }
          }
        }
      }
    `
  );

  const siteUrl = site.siteMetadata.siteUrl;
  const metaDescription = description || site.siteMetadata.description;
  const metaTwitterAuthor = site.siteMetadata.social.twitter;
  const metaImagePath = imagePath || allFile.edges[0].node.publicURL;
  const metaUrl = slug && siteUrl + slug;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={siteUrl + metaImagePath} />
      {slug && <link rel="canonical" href={metaUrl} />}

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={siteUrl + metaImagePath} />
      <meta property="og:type" content={type} />

      {/* Twitter Card tags */}
      {!imagePath ? (
        <meta name="twitter:card" content="summary" />
      ) : (
        <meta name="twitter:card" content="summary_large_image" />
      )}
      <meta name="twitter:creator" content={metaTwitterAuthor} />
      <meta name="twitter:site" content={metaTwitterAuthor} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={siteUrl + metaImagePath} />
    </Helmet>
  );
}

export default Seo;
