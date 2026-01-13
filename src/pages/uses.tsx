import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/layout';
import '../styles/uses.scss';

interface Skill {
  name: string;
  description?: string;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => (
  <div className="skill-card">
    <h2 className="skill-card__title">{title}</h2>
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <li key={index} className="skill-item">
          <span className="skill-item__name">{skill.name}</span>
          {skill.description && <span className="skill-item__description">{skill.description}</span>}
        </li>
      ))}
    </ul>
  </div>
);

function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", description: "For data science, ML, and backend development" },
        { name: "JavaScript/TypeScript", description: "For frontend and full-stack development" },
        { name: "Go", description: "For microservices and high-performance applications" },
        { name: "Java", description: "Old Reliable for system-level programming" },
      ]
    },
    {
      title: "Data Engineering & Analytics",
      skills: [
        { name: "Apache Spark", description: "For large-scale data processing" },
        { name: "Kafka", description: "For building real-time data pipelines" },
        { name: "Airflow", description: "For orchestrating complex workflows" },
        { name: "dbt", description: "For data transformation in the warehouse" },
      ]
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS, GCP, Azure", description: "Cloud platforms" },
        { name: "Terraform", description: "For infrastructure as code" },
        { name: "Kubernetes", description: "For container orchestration" },
        { name: "Docker", description: "For containerization" },
      ]
    },
    {
      title: "DevOps & CI/CD",
      skills: [
        { name: "GitLab CI/CD", description: "For automated pipelines" },
        { name: "GitHub Actions", description: "For workflow automation" },
        { name: "GitLab", description: "For continuous delivery" },
        { name: "Datadog & Prometheus & Grafana", description: "For monitoring and observability" },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", description: "For building user interfaces" },
        { name: "Next.js", description: "For server-side rendering and static site generation" },
        { name: "GraphQL", description: "For efficient API queries" },
        { name: "Tailwind CSS", description: "For rapid UI development" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", description: "Relational database" },
        { name: "MongoDB", description: "Document-oriented database" },
        { name: "Redis", description: "In-memory data structure store" },
        { name: "Elasticsearch", description: "For full-text search and analytics" },
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "TensorFlow & PyTorch", description: "For deep learning" },
        { name: "scikit-learn", description: "For traditional ML algorithms" },
        { name: "Hugging Face Transformers", description: "For NLP tasks" },
        { name: "MLflow", description: "For ML lifecycle management" },
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { name: "VS Code", description: "Primary code editor" },
        { name: "Jupyter Lab", description: "For interactive computing" },
        { name: "Postman", description: "For API development and testing" },
        { name: "Git & GitHub", description: "For version control" },
      ]
    },
  ];

  return (
    <Layout>
      <Seo title="Skills & Tools" description="A showcase of modern languages, frameworks, tools, and technologies I use in software development" />

      <header className="skills-header">
        <h1 className="skills-title">My Modern Tech Stack</h1>
        <p className="skills-subtitle">Tools and technologies I use to bring ideas to life</p>
      </header>

      <main className="skills-grid">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} title={category.title} skills={category.skills} />
        ))}
      </main>
    </Layout>
  );
}

export default SkillsPage;
