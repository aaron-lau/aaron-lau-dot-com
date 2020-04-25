import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import '../styles/uses.scss'

function index() {
  return (
    <Layout>
      <SEO title="Uses" description="A page dedicated to the language/framework/tools and other stuff I use daily" />

      <h1 className="uses-header">Things I use to get stuff done</h1>

      <main className="uses">
        <section className="uses-section">
          <h2>Programming Language</h2>
          <li>
            <span className="uses-subheader">Python -</span> Who doesn't like 🐍
          </li>
          <li>
            <span className="uses-subheader">Scala/Spark</span>
          </li>
          <li>
            <span className="uses-subheader">SQL</span>
          </li>
          <li>
            <span className="uses-subheader">Go -</span> In the process of learning
          </li>
        </section>

        <section className="uses-section">
          <h2>Tools</h2>
          <li>
            <span className="uses-subheader">AWS and GCP</span>
          </li>
          <li>
            <span className="uses-subheader">Docker and Kubernetes</span>
          </li>
          <li>
            <span className="uses-subheader">Zeppelin and Jupyter</span> Notebooks
          </li>
          <li>
            <span className="uses-subheader">Looker</span>
          </li>
        </section>

        <section className="uses-section">
          <h2>Deployment</h2>
          <li>
            <span className="uses-subheader">Gitlab CI/CD</span>
          </li>
          <li>
            <span className="uses-subheader">Jenkins</span>
          </li>
          <li>
            <span className="uses-subheader">Spinnaker</span>
          </li>
        </section>

        <section className="uses-section">
          <h2>Web Dev</h2>
          <li>
            <span className="uses-subheader">React and Redux -</span> Just like this website
          </li>
          <li>
            <span className="uses-subheader">Netlify</span>
          </li>
        </section>
      </main>
    </Layout>
  )
}

export default index
