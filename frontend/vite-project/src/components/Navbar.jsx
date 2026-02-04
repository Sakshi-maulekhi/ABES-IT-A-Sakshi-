import React, { useState } from 'react'
import './navbar.css'

function Navbar() {
  const [activeLink, setActiveLink] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', href: '#/' },
    { id: 'about', label: 'About', href: '#/about' },
    { id: 'contact', label: 'Contact', href: '#/contact' }
  ]

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>MyApp</h1>
      </div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <a
              href={item.href}
              className={activeLink === item.id ? 'active' : ''}
              onClick={() => setActiveLink(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;
