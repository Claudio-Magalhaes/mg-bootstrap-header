import React from 'react'
import { Col } from 'react-bootstrap'
import { IoIosMenu } from 'react-icons/io'

const HeaderBtn = ({ cols, hide, align, offsetClass }) => {
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu')
    offcanvasMobileMenu.classList.add('active')
  }

  return (
    <Col
      className={`d-flex d-${hide}-none justify-content-${align.horizontal} align-items-${align.vertical}`}
      xl={cols.xl}
      lg={cols.lg}
      md={cols.md}
      sm={cols.sm}
      xs={cols.xs}
    >
      <div className='header-btn-wrapper'>
        <div className='mobile-button-wrapper d-block d-lg-none text-right'>
          <button
            className={`mobile-aside-button ${offsetClass}`}
            onClick={() => triggerMobileMenu()}
          >
            <IoIosMenu />
          </button>
        </div>
      </div>
    </Col>
  )
}

HeaderBtn.defaultProps = {
  hide: 'md',
  cols: {
    xl: 1,
    lg: 1,
    md: 10,
    ms: 10,
    xs: 4
  },
  align: {
    horizontal: 'end',
    vertical: 'end'
  }
}

export default HeaderBtn
