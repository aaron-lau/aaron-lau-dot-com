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
          <h2>Language</h2>
          <li>
            <span className="uses-subheader">Python -</span> Who doesn't like 🐍
          </li>
          <li>
            <span className="uses-subheader">Scala/Spark -</span>
          </li>
          <li>
            <span className="uses-subheader">SQL -</span> UPDATE user_table SET salary = 1000000 WHERE name = 'Aaron Lau';
          </li>
          <li>
            <span className="uses-subheader">Go -</span> In the process of learning
          </li>
        </section>

        <section className="uses-section">
          <h2>Tools</h2>
          <li>
            <span className="uses-subheader">AWS and GCP -</span> Multi Cloud
          </li>
          <li>
            <span className="uses-subheader">Docker -</span>
          </li>
          <li>
            <span className="uses-subheader">Zeppelin and Jupyter -</span> Notebooks!
          </li>
        </section>

        <section className="uses-section">
          <h2>Web Development</h2>
          <li>
            <span className="uses-subheader">React and Redux -</span> Just like this website
          </li>
          <li>
            <span className="uses-subheader">Netlify</span> 
          </li>
        </section>

        <section className="uses-section">
          <h2>Tools</h2>
          <li>
            <span className="uses-subheader">VSCode -</span> The best editor out there
          </li>
        </section>
      </main>
    </Layout>
  )
}

export default index
