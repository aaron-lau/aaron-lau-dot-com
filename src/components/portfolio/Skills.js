import React from 'react'

import aws from '../../images/tech/aws.svg'
import docker from '../../images/tech/docker.svg'
import looker from '../../images/tech/looker.svg'
import python from '../../images/tech/python.svg'
import react from '../../images/tech/react.svg'
import spark from '../../images/tech/spark.svg'

import './skills.scss'

function Skills() {
  return (
    <section className="portfolio__section skills">
      <h2 className="portfolio__header">Skills</h2>
      <h3 className="portfolio__sub-header">Technologies that I use currently</h3>
      <div className="g-3">
        <img className="skills__img" src={python} alt="Python" title="Python" />
        <img className="skills__img" src={docker} alt="Docker" title="Docker" />
        <img className="skills__img" src={react} alt="React" title="React" />
      </div>
      <div className="g-3">
      <img className="skills__img" src={spark} alt="Spark" title="Spark" />
      <img className="skills__img" src={aws} alt="AWS" title="AWS" />
        <img className="skills__img" src={looker} alt="Looker" title="Looker" />
      </div>
    </section>
  )
}

export default Skills
