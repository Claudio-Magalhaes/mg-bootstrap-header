import React from 'react'
import { Col } from 'react-bootstrap'
import { IoIosMenu } from 'react-icons/io'

const HeaderBtn = (prop) => {
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu')
    offcanvasMobileMenu.classList.add('active')
  }

  return (
    <Col
      className='d-flex d-md-none  justify-content-end align-items-center'
      sm={10}
      md={10}
    >
      <div className='header-btn-wrapper'>
        <div className='mobile-button-wrapper d-block d-lg-none text-right'>
          <button
            className='mobile-aside-button'
            onClick={() => triggerMobileMenu()}
          >
            <IoIosMenu />
          </button>
        </div>
      </div>
    </Col>
  )
}

export default HeaderBtn
