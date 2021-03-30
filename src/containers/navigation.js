import React, { Fragment } from 'react'
import { Col } from 'react-bootstrap'

const index = (props) => {
  const { menu, NodeMenu, expand, typeMenu, offsetClass } = props

  const cols = {
    xl: props.cols.xl ? props.cols.xl : 9,
    lg: props.cols.lg ? props.cols.lg : 9,
    md: props.cols.md ? props.cols.md : 9,
    sm: props.cols.sm ? props.cols.sm : 8,
    xs: props.cols.xs ? props.cols.xs : 8
  }
  const align = {
    horizontal: props.align.horizontal ? props.align.horizontal : 'center',
    vertical: props.align.vertical ? props.align.vertical : 'center'
  }

  const TypeRender = ({ m }) => {
    if (m.action) {
      return (
        <span className='header-link' onClick={() => m.action()}>
          {m.name}
        </span>
      )
    } else if (m.render) {
      const Render = m.render
      return <Render offsetClass={offsetClass} />
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
  cols: {},
  align: {},
  menu: [],
  //
  expand: 'md'
}

export default index
