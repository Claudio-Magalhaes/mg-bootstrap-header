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
        logo={{
          base: logo,
          sm: logoXL,
          xs: logoXS,
        }}
        menu={[
          { name: 'Início', url: '/' },
          { name: 'Sobre', url: '/sobre' },
          { name: 'Serviços', action: () => alert('action') },
          { name: 'Quem Somos', url: '/' },
          { name: 'Contato', render: () => (
              <Button
                variant='outline-success'
                size='sm'
              >contato</Button>
            )}
        ]}
        align={{
          bar: "center",
          menu: { vertical: 'end',  horizontal: 'center' }
        }}
      />
      <div style={{height: '100rem'}} />
    </Router>
  )
}

export default App
