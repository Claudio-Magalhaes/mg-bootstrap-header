import React, { useEffect } from 'react'
import MobileNavMenu from '../components/mobileMenuNav'
import MobileWidgets from "../components/mobileNavContatos";
import { IoMdClose } from 'react-icons/io'

const MobileMenu = (props) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector('#offcanvas-navigation')
    const anchorLinks = offCanvasNav.querySelectorAll('a')

    const menuExpand = offCanvasNav.querySelectorAll('.menuExpand')
    const numMenuExpand = menuExpand.length

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener('click', (e) => {
        sideMenuExpand(e)
      })
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener('click', () => {
        closeMobileMenu()
      })
    }
  })

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle('active')
  }

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu')
    offcanvasMobileMenu.classList.remove('active')
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
        <div className='offcanvasInnerContent'>
          <MobileNavMenu menu={props.menu} />

          <MobileWidgets data={props.menu} />
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
