import React, { Fragment } from 'react'

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
      <div
        className={
          `col d-none d-${expand}-flex justify-content-${align.horizontal}` +
          ` align-items-${align.vertical} ${typeMenu} col-xl-${cols.xl} col-lg-${cols.lg}` +
          ` col-md-${cols.md} col-sm-${cols.sm} col-${cols.xs} `
        }
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
      </div>
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
