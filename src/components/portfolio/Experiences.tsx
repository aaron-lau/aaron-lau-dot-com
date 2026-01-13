import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './projects.scss';

interface ExperienceNode {
  company: string;
  company_link?: string;
  position: string;
  timeline: string;
  description?: string;
}

interface ExperienceEdge {
  node: ExperienceNode;
}

interface ExperiencesData {
  allExperiencesJson: {
    edges: ExperienceEdge[];
  };
}

function Experiences() {
  const data = useStaticQuery<ExperiencesData>(graphql`
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
  `);

  return (
    <section className="portfolio__section projects">
      <h2 className="portfolio__header">Experiences</h2>
      <h3 className="portfolio__sub-header">Places I have worked at before</h3>

      {data.allExperiencesJson.edges.map((experience) => (
        <div className="project-container" key={experience.node.company}>
          <h3 className="project-header">
            {experience.node.company_link && (
              <a className="project-links animated-underline" href={experience.node.company_link}>
                {experience.node.company}
              </a>
            )}
          </h3>
          <h4 className="project-stack">
            <strong>{experience.node.position}</strong> - ({experience.node.timeline})
          </h4>
          <div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experiences;
