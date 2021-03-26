import React from 'react'
import { Link } from 'react-router-dom'

const Index = ({ menu }) => (
  <nav>
    <ul className='mainMenu m-0 align-items-end'>
      {menu.map((m, k) => (
        <li key={k}>
          <Link alt={m.name} to={process.env.PUBLIC_URL + m.url}>
            {m.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Index
