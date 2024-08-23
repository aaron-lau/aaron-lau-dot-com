import React from 'react'


import aws from '../../images/tech/aws.svg'
import azure from '../../images/tech/azure.svg'
import gcp from '../../images/tech/gcp.svg'
import java from '../../images/tech/java.svg'
import kubernetes from '../../images/tech/kubernetes.svg'
import python from '../../images/tech/python.svg'
import snowflake from '../../images/tech/snowflake.svg'
import spark from '../../images/tech/spark.svg'
import terraform from '../../images/tech/terraform.svg'


import './skills.scss'

function Skills() {
  return (
    <section className="portfolio__section skills">
      <h2 className="portfolio__header">Skills</h2>
      <h3 className="portfolio__sub-header">Technologies that I use currently</h3>
      <div className="g-3">
        <img className="skills__img" src={python} alt="Python" title="Python" />
        <img className="skills__img" src={java} alt="Java" title="Java" />
        <img className="skills__img" src={spark} alt="Spark" title="Spark" />
      </div>
      <div className="g-3">
      <img className="skills__img" src={kubernetes} alt="Kubernetes" title="Kubernetes" />
        <img className="skills__img" src={terraform} alt="Docker" title="Docker" />
        <img className="skills__img" src={snowflake} alt="Snowflake" title="Snowflake" />
      </div>
      <div className="g-3">
        <img className="skills__img" src={aws} alt="AWS" title="AWS" />
        <img className="skills__img" src={gcp} alt="GCP" title="GCP" />
        <img className="skills__img" src={azure} alt="Azure" title="Azure" />
      </div>
    </section>
  )
}

export default Skills
