import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Header from 'mg-bootstrap-header'
import './index.scss'

const App = () => {
  return (
    <Router>
      <Header
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
      />
      <div style={{height: '100rem'}} />
    </Router>
  )
}

export default App
