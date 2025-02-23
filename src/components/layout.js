import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  const schemaOrgJSONLD = {
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
      "https://www.linkedin.com/in/aaronlaucs/",
      "https://twitter.com/aaron_lau"
    ]
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
      <Header />
      <div
        style={{
          maxWidth: '800px',
          margin: 'auto',
          padding: '0 0.75rem',
          overflow: 'hidden',
        }}
      >
        <div>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default Layout