import React, { Fragment } from 'react'
import { Col } from 'react-bootstrap'

const index = (props) => {
  const { logo, offsetClass } = props

  const cols = {
    xl: props.cols.xl ? props.cols.xl : 3,
    lg: props.cols.lg ? props.cols.lg : 3,
    md: props.cols.md ? props.cols.md : 3,
    ms: props.cols.ms ? props.cols.ms : 3,
    xs: props.cols.xs ? props.cols.xs : 8
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
    <Col
      className={`d-flex align-items-${align.vertical} justify-content-${align.horizontal}`}
      xl={cols.xl}
      lg={cols.lg}
      md={cols.md}
      sm={cols.sm}
      xs={cols.xs}
    >
      {/* logo */}
      <Logo />
    </Col>
  )
}

index.defaultProps = {
  cols: {},
  align: {}
}

export default index
