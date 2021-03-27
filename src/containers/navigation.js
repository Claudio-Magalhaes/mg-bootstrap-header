import React, { Fragment } from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

const index = (props) => {
  const { align, menu, NodeMenu, cols, expand } = props
  return (
    <Fragment>
      <Col
        className={`d-none d-${expand}-flex justify-content-${align.horizontal}
            align-items-${align.vertical}`}
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
