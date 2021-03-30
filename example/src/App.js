import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Button from "react-bootstrap/Button"

import logo from './assets/elooLogo.png'
import logoXL from './assets/logoXL.png'
import logoXS from './assets/logoXS.png'

import Header from 'mg-bootstrap-header'
import './index.scss'

const App = () => {
  return (
    <Router>
      <Header
        theme='dark'
        logo={logo}
        menu={[
          { name: 'Início', url: '/' },
          { name: 'Sobre', url: '/sobre' },
          { name: 'Serviços', action: () => alert('action') },
          { name: 'Quem Somos', url: '/' }
        ]}
        align={{
          bar: "center",
          menu: { vertical: 'end' }
        }}
      />
      <div style={{height: '100rem'}} />
    </Router>
  )
}

export default App
