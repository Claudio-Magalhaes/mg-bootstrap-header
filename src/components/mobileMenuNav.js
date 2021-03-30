import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavMenu = ({ menu }) => {
  const TypeRender = ({ m }) => {
    if (m.action) {
      return (
        <span className='header-link' onClick={() => m.action()}>
          {m.name}
        </span>
      )
    } else if (m.render) {
      const Render = m.render
      return <Render />
    } else if (m.url) {
      const active = window.location.pathname === m.url ? 'active' : ''
      return (
        <a
          className={'header-link ' + active}
          alt={m.name}
          href={process.env.PUBLIC_URL + m.url}
        >
          {m.name}
        </a>
      )
    }
    return null
  }
  return (
    <nav className='offcanvasNavigation' id='offcanvas-navigation'>
      <ul>
        {menu.map((m, k) => (
          <li key={k}>
            <TypeRender m={m} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileNavMenu
