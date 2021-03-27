import React, { Fragment } from 'react'
import { Col } from 'react-bootstrap'

const index = (props) => {
  const { align, menu, NodeMenu, cols, expand, typeMenu, offsetClass } = props

  const TypeRender = ({ m }) => {
    if (m.action) {
      return <span onClick={() => m.action()}>{m.name}</span>
    } else if (m.render) {
      const Render = m.render
      return <Render />
    } else if (m.url) {
      const active = window.location.pathname === m.url ? 'active' : ''
      return (
        <a
          className={active}
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
    <Fragment>
      <Col
        className={`d-none d-${expand}-flex justify-content-${align.horizontal}
            align-items-${align.vertical} ${typeMenu}`}
        xl={cols.xl}
        lg={cols.lg}
        md={cols.md}
        sm={cols.sm}
        xs={cols.xs}
      >
        {NodeMenu ? (
          <NodeMenu />
        ) : (
          <nav>
            <ul className={`mainMenu m-0 align-items-end  ${offsetClass}`}>
              {menu.map((m, k) => (
                <li key={k}>
                  <TypeRender m={m} />
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Col>
    </Fragment>
  )
}

index.defaultProps = {
  cols: {
    xl: 9,
    lg: 9,
    md: 9,
    sm: 8,
    xs: 8
  },
  align: {
    horizontal: 'center',
    vertical: 'center'
  },
  menu: [{ name: 'Início', url: '/' }],
  //
  expand: 'md'
}

export default index
