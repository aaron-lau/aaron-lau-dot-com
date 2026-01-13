import React from 'react';
import Experiences from '../components/portfolio/Experiences';
import Projects from '../components/portfolio/Projects';
import Skills from '../components/portfolio/Skills';
import FeaturedPosts from '../components/portfolio/FeaturedPosts';

import './portfolio.scss';

function portfolio() {
  return (
    <main className="portfolio">
      <section className="hero">
        <h1 className="hero__heading">Hi, I'm Aaron Lau</h1>
        <h2 className="hero__sub-heading">
          I'm a software development engineer working in New York City at <a className="animated-underline" href="https://aws.amazon.com">AWS</a>
        </h2>
        <section className="hero__social">
          <a href="https://github.com/aaron-lau">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/aaronlaucs/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>LinkedIn</title>
              <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" />
            </svg>
          </a>
          <a href="https://x.com/aaron_lau">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <title>X</title>
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
          </a>
          <a href="https://bsky.app/profile/aaron-lau.bsky.social">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <title>Bluesky</title>
              <path d="M12.104,7.999C16.919,11.614,22.099,18.944,24,22.877c1.902-3.933,7.081-11.263,11.896-14.878	C39.371,5.391,45,3.373,45,9.795c0,1.283-0.735,10.774-1.167,12.315c-1.499,5.357-6.962,6.724-11.821,5.897	C40.506,29.452,42.667,34.241,38,39.03c-8.863,9.094-12.738-2.282-13.732-5.197c-0.182-0.534-0.267-0.784-0.268-0.572	c-0.001-0.213-0.086,0.037-0.268,0.572C22.738,36.748,18.863,48.124,10,39.03c-4.667-4.789-2.506-9.577,5.988-11.023	c-4.86,0.827-10.323-0.539-11.821-5.897C3.735,20.569,3,11.077,3,9.795C3,3.373,8.63,5.391,12.104,7.999L12.104,7.999z"/>
            </svg>
          </a>
        </section>
      </section>
      <Experiences />
      <Projects />
      <Skills />
      {<FeaturedPosts />}
    </main>
  );
}

export default portfolio;
