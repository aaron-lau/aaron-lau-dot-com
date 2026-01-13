import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import ParticleCursor from './ParticleCursor';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aaron Lau",
    "email": "aaron-lau@aaron-lau.com",
    "image": "https://drive.google.com/",
    "url": "http://aaron-lau.com",
    "jobTitle": "Sofrware Engineer",
    "gender": "http://schema.org/Male",
    "sameAs": [
      "https://github.com/aaron-lau",
      "https://www.linkedin.com/in/aaronlaucs/",
      "https://x.com/aaron_lau"
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
      <ParticleCursor />
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
  );
};

export default Layout;
