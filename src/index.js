import React, { Fragment, useEffect, useState } from 'react'
import propTypes from 'prop-types'
import { Row } from 'react-bootstrap'

import Logo from './containers/logo'
import Navigation from './containers/navigation'
import BtnMenu from './components/btnMobile.js'
import MobileMenu from './containers/mobileMenu'

const index = (props) => {
  const [scroll, setScroll] = useState(0)
  const [headerTop, setHeaderTop] = useState('1000')
  const [preHeader, setPreHeader] = useState(true)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const header = document.querySelector('header')
    setHeaderTop(header.offsetHeight)
    window.addEventListener('scroll', handleScroll, true)
  }, [])

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  return (
    <Fragment>
      <header
        className={`header d-flex align-items-${props.verticalAlignBar} ${
          scroll > headerTop ? 'stick' : ''
        } `}
      >
        <Row className='container-fluid'>
          <Logo />
          {/* NAVIGATIONS */}
          <Navigation menu={props.menu} {...props.propsMenu} />
          {/* NAVIGATIONS */}
          <BtnMenu {...props} />
        </Row>
        {/* Mobile Menu */}
        <MobileMenu />
        {/* <MobileMenu setSweet={d => setSweet(d)} /> */}
      </header>
    </Fragment>
  )
}

index.defaultProps = {
  menu: [{ name: 'Início', url: '/' }],
  propsMenu: {
    verticalAlign: 'center',
    horizontalAlign: 'center'
  },
  direcao: 'revert',
  verticalAlignBar: 'end',
  verticalAlignMenu: 'center',
  horzontelAligManu: 'center'
}

index.propTypes = {
  // direcao: propTypes.oneOf(['normal', 'revert', 'center']),

  menu: propTypes.array,
  propsMenu: propTypes.shape({
    verticalAlign: propTypes.oneOf(['start', 'center', 'end']),
    horizontalAlign: propTypes.oneOf(['start', 'center', 'end']),
    size: propTypes.shape({
      xl: propTypes.number,
      lg: propTypes.number,
      md: propTypes.number
    })
  }),
  NodeMenu: propTypes.node,

  verticalAlignBar: propTypes.oneOf(['start', 'center', 'end']),
  verticalAlignMenu: propTypes.oneOf(['start', 'center', 'end']),
  horzontelAligManu: propTypes.oneOf(['start', 'center', 'end'])
}

export default index
