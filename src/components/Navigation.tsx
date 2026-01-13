import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import ToggleThemeButton from './toggleViewButton';

import './navigation.scss';

function Navigation() {
  const [isSidebarOpen, toggleSidebar] = useState(false);
  const resume_drive_url = "https://drive.google.com/drive/folders/1T8wl807aKjwm2uu_cuTfbIMnEOEsNawy?usp=sharing";

  useEffect(() => {
    const navbar = document.getElementById('nav-mobile');
    const checkbox = document.getElementById('checkbox1') as HTMLInputElement;
    if (isSidebarOpen) {
      navbar?.classList.add('tap');
      document.documentElement.style.overflow = 'hidden';
      if (checkbox) checkbox.checked = true;
    } else {
      navbar?.classList.remove('tap');
      document.documentElement.style.overflow = 'auto';
      if (checkbox) checkbox.checked = false;
    }
  }, [isSidebarOpen]);

  return (
    <>
      <nav id="nav-desktop" className="nav">
        <Link className="nav__item animated-underline" to="/">
          Home
        </Link>
        <Link className="nav__item animated-underline" to="/blog/">
          Blog
        </Link>
        <a className="nav__item animated-underline" href={resume_drive_url} download>Resume</a>
        <Link className="nav__item animated-underline" to="/contact/">
          Contact
        </Link>
        <ToggleThemeButton />
      </nav>

      <input
        type="checkbox"
        id="checkbox1"
        className="checkbox1 visuallyHidden"
        onChange={() => toggleSidebar(!isSidebarOpen)}
      />
      <label htmlFor="checkbox1" aria-labelledby="checkbox1" aria-label="toggle navigation" id="hamburger">
        <div className="hamburger">
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
          <span className="bar bar4" />
        </div>
      </label>

      <nav id="nav-mobile">
        <Link className="nav__item" to="/">
          Home
        </Link>
        <Link className="nav__item" to="/blog/">
          Blog
        </Link>
        <a className="nav__item" href={resume_drive_url} download>Resume</a>
        <Link className="nav__item" to="/contact/">
          Contact
        </Link>
        <ToggleThemeButton />
      </nav>
    </>
  );
}

export default Navigation;
