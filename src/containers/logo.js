import React from 'react'
import { Col } from 'react-bootstrap'

const index = ({ cols }) => {
  return (
    <Col xl={cols.xl} lg={cols.lg} md={cols.md} sm={cols.sm} xs={cols.xs}>
      {/* logo */}
      <h1>LOGO</h1>
    </Col>
  )
}

index.defaultProps = {
  cols: {
    xl: 3,
    lg: 3,
    md: 3,
    ms: 3,
    xs: 8
  }
}

export default index
