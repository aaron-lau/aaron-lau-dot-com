import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Header />
    <div
      style={{
        maxWidth: '800px',
        margin: 'auto',
        padding: '0 0.75rem',
        overflow: 'hidden',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Aaron Lau",
          "email": "aaron-lau@aaron-lau.com",
          "image": "https://drive.google.com/",
          "url": "http://aaron-lau.com",
          "jobTitle": "Data Engineer",
          "gender": "http://schema.org/Male",
          "sameAs": [
            "https://github.com/aaron-lau",
            "https://www.linkedin.com/in/jibin2706/",
            "https://twitter.com/real_jibin",
          ]
        }`,
        }}
      />
      <div>{children}</div>
    </div>
    <Footer />
  </>
)

export default Layout
