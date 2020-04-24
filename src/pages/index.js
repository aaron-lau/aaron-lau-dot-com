import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Portfolio from '../templates/portfolio'

function index() {
  return (
    <Layout>
      <SEO
        title="Aaron Lau — Personal Website and Blogs"
        description="Aaron Lau's Peronsal Website and Blogs"
      />
      <Portfolio />
    </Layout>
  )
}

export default index
