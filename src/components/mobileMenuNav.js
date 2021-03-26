import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavMenu = () => {
  return (
    <nav className='offcanvasNavigation' id='offcanvas-navigation'>
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + '/'}>Início</Link>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + '/quem_sou'}>Sobre</Link>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + '/contato'}>Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNavMenu
