import React, { Fragment, useState } from 'react'
import Header from './components/header'
import { Route, Switch } from 'react-router-dom'
import Portafolio from './components/pages/portafolio'
import NotFound from './components/not-found'
import './App.css'
import ActiveBurger from './burger-context.js'
const App = () => {
  const [burger, setBurger] = useState({ isActive: false })
  return (
    <Fragment>
      <ActiveBurger.Provider value={{ burger, setBurger }}>
        <Header />
      </ActiveBurger.Provider>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact strict path="/" render={() => <div>Im Home</div>} />

            <Route exact path="/portafolio" component={Portafolio} />
            <Route
              exact
              path="/about"
              component={() => <div className="testeo">ABOUT PAGE</div>}
            />
            <Route
              exact
              path="/contact"
              render={props => <div className="testeo">Contacto</div>}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Fragment>
  )
}

export default App
