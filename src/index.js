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

  const offsetClass = {
    offset: props.offsetReact.offset ? props.offsetReact.offset : 100,
    classBar: props.offsetReact.classBar ? props.offsetReact.classBar : '',
    logo: props.offsetReact.classMenu
      ? props.offsetReact.classMenu
      : 'offsetAction',
    classMenu: props.offsetReact.classMenu
      ? props.offsetReact.classMenu
      : 'offsetAction',
    classMenu2: props.offsetReact.classMenu2
      ? props.offsetReact.classMenu2
      : 'offsetAction',
    classBtnMobile: props.offsetReact.classBtnMobile
      ? props.offsetReact.classBtnMobile
      : 'offsetAction'
  }

  useEffect(() => {
    if (offsetClass.offset) {
      const header = document.querySelector('header')

      if (typeof offsetClass.offset === 'number') {
        setHeaderTop(offsetClass.offset)
      } else {
        setHeaderTop(header[offsetClass.offset])
      }
      window.addEventListener('scroll', handleScroll, true)
    }
  }, [])

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  return (
    <Fragment>
      <header
        id='site-header'
        className={`header d-flex
          align-items-${props.align.bar ? props.align.bar : 'end'}
          ${scroll > headerTop ? offsetClass.classBar : ''} ${props.theme}
        `}
      >
        <Row className='container-fluid'>
          <Logo
            offsetClass={scroll > headerTop ? offsetClass.classMenu : ''}
            logo={props.logo}
            cols={props.cols.logo}
            align={props.align.logo}
          />
          {/* NAVIGATIONS */}
          <Navigation
            typeMenu='menu'
            offsetClass={scroll > headerTop ? offsetClass.classMenu : ''}
            menu={props.menu}
            cols={props.cols.menu}
            expand={props.expand.menu}
            align={props.align.menu}
          />
          {props.menu2 ? (
            <Navigation
              typeMenu='menu2'
              offsetClass={scroll > headerTop ? offsetClass.classMenu2 : ''}
              menu={props.menu2}
              cols={props.cols.menu2}
              expand={props.expand.menu2}
              align={props.align.menu2}
            />
          ) : null}
          {/* NAVIGATIONS */}
          <BtnMenu
            offsetClass={scroll > headerTop ? offsetClass.classBtnMobile : ''}
            hide={props.expand.hideBtnMobile}
            cols={props.cols.btnMobile}
            align={props.align.btnMobile}
          />
        </Row>
        {/* Mobile Menu */}
        <MobileMenu menu={props.menu} menu2={props.menu2} />
        {/* <MobileMenu setSweet={d => setSweet(d)} /> */}
      </header>
    </Fragment>
  )
}

index.defaultProps = {
  theme: '',
  cols: {},
  align: {},
  expand: {},
  offsetReact: {}
}

index.propTypes = {
  // TEMA
  theme: propTypes.oneOf(['dark']),
  // COLUNAS
  cols: propTypes.shape({
    logo: propTypes.shape({
      xl: propTypes.number,
      lg: propTypes.number,
      md: propTypes.number,
      sm: propTypes.number,
      xs: propTypes.number
    }),
    menu: propTypes.shape({
      xl: propTypes.number,
      lg: propTypes.number,
      md: propTypes.number,
      sm: propTypes.number,
      xs: propTypes.number
    }),
    menu2: propTypes.shape({
      xl: propTypes.number,
      lg: propTypes.number,
      md: propTypes.number,
      sm: propTypes.number,
      xs: propTypes.number
    }),
    btnMobile: propTypes.shape({
      xl: propTypes.number,
      lg: propTypes.number,
      md: propTypes.number,
      sm: propTypes.number,
      xs: propTypes.number
    })
  }),
  // ALINHAMENTO
  align: propTypes.shape({
    bar: propTypes.oneOf(['start', 'center', 'end']),
    logo: propTypes.shape({
      horizontal: propTypes.oneOf(['start', 'center', 'end']),
      vertical: propTypes.oneOf(['start', 'center', 'end'])
    }),
    menu: propTypes.shape({
      horizontal: propTypes.oneOf(['start', 'center', 'end']),
      vertical: propTypes.oneOf(['start', 'center', 'end'])
    }),
    menu2: propTypes.shape({
      horizontal: propTypes.oneOf(['start', 'center', 'end']),
      vertical: propTypes.oneOf(['start', 'center', 'end'])
    }),
    btnMobile: propTypes.shape({
      horizontal: propTypes.oneOf(['start', 'center', 'end']),
      vertical: propTypes.oneOf(['start', 'center', 'end'])
    })
  }),
  //  EXPANSÕES
  expand: propTypes.shape({
    menu: propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    menu2: propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    hideBtnMobile: propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  }),
  // ARRAY DE MENU
  menu: propTypes.array,
  // ARRAY DE MENU 2
  menu2: propTypes.array,
  // NODE MENU SUBSTITUIRÁ O MENU CONVENCIONAL CASO EXISTA
  NodeMenu: propTypes.node,
  // NODE MENU 2 SUBSTITUIRÁ O MENU CONVENCIONAL CASO EXISTA
  NodeMenu2: propTypes.node,
  // INFORMA QUANDO O HEADER DEVE RECEBAR A CLASSE DE INTERAÇÃO
  offsetReact: propTypes.shape({
    offset: propTypes.oneOf(['offsetHeight', 'offsetTop', propTypes.number]),
    classBar: propTypes.string,
    logo: propTypes.string,
    classMenu: propTypes.string,
    classMenu2: propTypes.string,
    classBtnMobile: propTypes.string
  })
}

export default index
