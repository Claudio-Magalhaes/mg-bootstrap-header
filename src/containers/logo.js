import React, { Fragment } from 'react'
import { Col } from 'react-bootstrap'

const index = ({ cols, logo }) => {
  const Logo = () => {
    if (typeof logo === 'string') {
      return <img className='site-logo' alt='logo' src={logo} />
    } else if (typeof logo === 'object') {
      return (
        <Fragment>
          <img
            className={
              'site-logo site-logo-base d-none d-md-flex ' +
              `${logo.sm ? 'd-xs-none' : 'd-sm-flex'}`
            }
            alt='logo'
            src={logo.base}
          />
          {logo.sm ? (
            <img
              className={`site-logo site-logo-sm d-md-none ${
                logo.xs ? ' d-none d-sm-flex' : ' d-flex'
              }`}
              alt='logo'
              src={logo.sm}
            />
          ) : null}
          {logo.xs ? (
            <img
              className='site-logo site-logo-xs d-sm-none d-xs-flex'
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
      className='d-flex align-items-end justify-content-center'
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
  cols: {
    xl: 3,
    lg: 3,
    md: 3,
    ms: 3,
    xs: 8
  }
}

export default index
