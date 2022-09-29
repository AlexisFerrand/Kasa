import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Apropos from './pages/Apropos'
import Home from './pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/apropos">
        <Apropos />
      </Route>
    </Router>
  </React.StrictMode>
)
