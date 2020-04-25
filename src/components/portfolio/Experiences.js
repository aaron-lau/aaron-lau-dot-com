import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import './projects.scss'

function Experiences() {
  const data = useStaticQuery(graphql`
    query {
      allExperiencesJson {
        edges {
          node {
            company
            company_link
            position
            timeline
            description
          }
        }
      }
    }
  `)

  return (
    <section className="portfolio__section projects">
      <h2 className="portfolio__header">Experiences</h2>
      <h3 className="portfolio__sub-header">Places I have worked at before</h3>

      {data.allExperiencesJson.edges.map((experience) => (
        <div className="project-container" key={experience.node.company}>
          <h3 className="project-header">
            {experience.node.company_link && (
              <a className="project-links" href={experience.node.company_link}>
                {experience.node.company}
              </a>
            )}
          </h3>
          <h4 className="project-stack">
            <strong>{experience.node.position}</strong> - ({experience.node.timeline})
          </h4>
          {/*
            {experience.node.description && (
              <p className="project-description" dangerouslySetInnerHTML={{ __html: experience.node.description }} />
            )}
          */}
          <div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experiences
