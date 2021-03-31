import React from 'react'
import MobileNavMenu from '../components/mobileMenuNav'
import MobileWidgets from '../components/mobileNavContatos'
import { IoMdClose } from 'react-icons/io'

const MobileMenu = (props) => {
  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu')
    offcanvasMobileMenu.classList.remove('active')
  }

  let menu = {}

  let widgets = {}

  let style = {}

  if (props.pre || props.contatos) {
    widgets = props.pre ? props.pre : props.contatos

    if (props.menu2) {
      menu = props.menu.concat(props.menu2)
    }
  } else {
    menu = props.menu

    if (props.menu2) {
      widgets = props.menu2
    } else {
      widgets = null
    }
  }

  if (props.bgLogo) {
    style = {
      backgroundImage: `url(${props.bgLogo})`,
      backgroundSize: '80%',
      backgroundPositionX: 'center',
      backgroundPositionY: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }

  return (
    <div className='offcanvasMobileMenu' id='offcanvas-mobile-menu'>
      <button
        className='offcanvasMenuClose'
        id='mobile-menu-close-trigger'
        onClick={() => closeMobileMenu()}
      >
        <IoMdClose />
      </button>
      <div className='offcanvasWrapper'>
        <div style={{ ...style }} className='offcanvasInnerContent'>
          <MobileNavMenu menu={menu} />

          {widgets ? <MobileWidgets data={widgets} /> : null}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
