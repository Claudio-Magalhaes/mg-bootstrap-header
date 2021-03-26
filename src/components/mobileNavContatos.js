import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const MobileWidgets = (prop) => {
  return (
    <div className='offcanvasWidgetArea'>
      <div className='offCanvasContactWidget'>
        <div className='headerContactInfo'>
          <ul>
            <li>
              <FaWhatsapp /> whatsapp
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileWidgets
