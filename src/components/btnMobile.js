import React from 'react'
import { IoIosMenu } from 'react-icons/io'

const HeaderBtn = ({ cols, hide, align, offsetClass }) => {
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu')
    offcanvasMobileMenu.classList.add('active')
  }

  return (
    <div
      className={
        `col d-flex d-${hide}-none justify-content-${align.horizontal} align-items-${align.vertical}` +
        ` col-${cols.xl}-xl col-${cols.lg}-lg col-${cols.md}-md col-${cols.sm}-sm col-${cols.xs}-xs`
      }
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
    </div>
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
