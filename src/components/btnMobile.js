import React from 'react'
import { IoIosMenu } from 'react-icons/io'

const HeaderBtn = ({ hide, align, offsetClass, ...props }) => {
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu')
    offcanvasMobileMenu.classList.add('active')
  }

  const cols = {
    xl: props.cols.xl ? props.cols.xl : 1,
    lg: props.cols.lg ? props.cols.lg : 1,
    md: props.cols.md ? props.cols.md : 1,
    sm: props.cols.sm ? props.cols.sm : 1,
    xs: props.cols.xs ? props.cols.xs : 2
  }

  return (
    <div
      className={
        `col d-flex d-${hide}-none justify-content-${align.horizontal} align-items-${align.vertical}` +
        ` col-xl-${cols.xl} col-lg-${cols.lg} col-md-${cols.md} col-sm-${cols.sm} col-${cols.xs}`
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
    md: 1,
    sm: 1,
    xs: 2
  },
  align: {
    horizontal: 'end',
    vertical: 'end'
  }
}

export default HeaderBtn
