import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import Navigation from '../components/navigation'
import HeaderBtn from '../components/btnMobile'
import { Link } from 'react-router-dom'

const index = ({ horizontalAlign, verticalAlign, menu, NodeMenu }) => {
  return (
    <Fragment>
      <Col
        className={`d-none d-md-flex justify-content-${horizontalAlign}
            align-items-${verticalAlign}`}
        xl={10}
        lg={10}
        md={10}
      >
        {NodeMenu ? (
          <NodeMenu />
        ) : (
          <nav>
            <ul className='mainMenu m-0 align-items-end'>
              {menu.map((m, k) => (
                <li key={k}>
                  <Link alt={m.name} to={process.env.PUBLIC_URL + m.url}>
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Col>
    </Fragment>
  )
}

export default index
