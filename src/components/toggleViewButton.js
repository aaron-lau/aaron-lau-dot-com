import React, { useEffect } from 'react'
import useDarkMode from '../hooks/useDarkMode'

import './toggleButton.scss'

function ToggleThemeButton() {
  const { value, toggle } = useDarkMode(false)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const color = value ? '#222222' : '#0b69a3'
      const metaThemeColor = document.querySelector('meta[name="theme-color"]')
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', color)
      }
    }
  }, [value]) // Add value as dependency

  return (
    <button
      role="switch"
      defaultChecked={value}
      onClick={toggle}
      aria-hidden="true"
      aria-checked={value}
      className="toggle-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={value ? '#cbd5e0' : '#4a5568'}
        width="20"
        style={{ display: 'block' }}
      >
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 000 16V4z" />
      </svg>
    </button>
  )
}

export default ToggleThemeButton