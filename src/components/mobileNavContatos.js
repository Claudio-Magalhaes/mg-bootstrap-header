import React from 'react'

const MobileWidgets = ({ data }) => {
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
    <div className='offcanvasWidgetArea'>
      <div className='offCanvasContactWidget'>
        <div className='headerContactInfo'>
          <ul>
            {data.map((m, k) => (
              <li key={k}>
                <TypeRender m={m} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileWidgets
