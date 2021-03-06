import React, { Fragment } from 'react'

const index = (props) => {
  const { logo, offsetClass } = props

  const cols = {
    xl: props.cols.xl ? props.cols.xl : 3,
    lg: props.cols.lg ? props.cols.lg : 3,
    md: props.cols.md ? props.cols.md : 3,
    sm: props.cols.sm ? props.cols.sm : 1,
    xs: props.cols.xs ? props.cols.xs : 6
  }
  const align = {
    horizontal: props.align.horizontal ? props.align.horizontal : 'center',
    vertical: props.align.vertical ? props.align.vertical : 'center'
  }
  const Logo = () => {
    if (logo.render) {
      const Render = logo.render
      return <Render offsetClass={offsetClass} />
    } else if (typeof logo === 'string') {
      return <img className='site-logo' alt='logo' src={logo} />
    } else if (typeof logo === 'object') {
      if (Object.keys(logo).length <= 0) {
        return <h1>logo</h1>
      }
      return (
        <Fragment>
          <img
            className={
              'site-logo site-logo-base d-none d-md-flex ' +
              `${logo.sm ? 'd-xs-none' : 'd-sm-flex'} ${offsetClass}`
            }
            alt='logo'
            src={logo.base}
          />
          {logo.sm ? (
            <img
              className={`site-logo site-logo-sm d-md-none ${
                logo.xs ? ' d-none d-sm-flex' : ' d-flex'
              } ${offsetClass}`}
              alt='logo'
              src={logo.sm}
            />
          ) : null}
          {logo.xs ? (
            <img
              className={`site-logo site-logo-xs d-sm-none d-xs-flex ${offsetClass}`}
              alt='logo'
              src={logo.xs}
            />
          ) : null}
        </Fragment>
      )
    }

    return <h1>logo</h1>
  }

  return (
    <div
      className={
        `col root-site-logo d-flex align-items-${align.vertical} justify-content-${align.horizontal}` +
        ` col-xl-${cols.xl} col-lg-${cols.lg} col-md-${cols.md} col-sm-${cols.sm} col-${cols.xs} `
      }
    >
      {/* logo */}
      <Logo />
    </div>
  )
}

index.defaultProps = {
  logo: {},
  cols: {},
  align: {}
}

export default index
