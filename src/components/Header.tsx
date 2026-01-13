import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import Navigation from './Navigation'
import Logo from '../images/Logo.png'

import './header.scss'

function Header() {
  const header = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (document.body.getBoundingClientRect().y < -50) {
          header.current?.classList.add('header--scroll')
        } else {
          header.current?.classList.remove('header--scroll')
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="header" id="header" ref={header}>
      <div className="header__container">
        <Link to="/">
          <img className="brand-logo" src={Logo} alt="Aaron Lau" title="Aaron Lau" />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
