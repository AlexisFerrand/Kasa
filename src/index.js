import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/index/index.css'
import Header from './components/Header'
import Apropos from './pages/Apropos'
import Home from './pages/Home'
import Footer from './components/Footer'
import Error from './components/error'
import Fichelogement from './pages/Fiche-logement'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/a-propos">
          <Apropos />
        </Route>
        <Route path="/housing/:id">
          <Fichelogement />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>
)
