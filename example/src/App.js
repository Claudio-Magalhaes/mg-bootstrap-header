import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import Header from 'mg-bootstrap-header'
import './index.scss'

const App = () => {
  return (
    <Router>
      <Header
        menu={[
          { name: 'Início', url: '/' },
          { name: 'Sobre', url: '/' },
          { name: 'Serviços', url: '/' },
          { name: 'Quem Somos', url: '/' },
          { name: 'Contato', url: '/' }
        ]}
      />
      <div style={{height: '100rem'}} />
    </Router>
  )
}

export default App
