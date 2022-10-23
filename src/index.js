import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/index/index.css'
import Header from './components/header'
import Apropos from './pages/a-propos'
import Home from './pages/homepage'
import Footer from './components/footer'
import Error from './components/error'
import Fichelogement from './pages/logement'

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
