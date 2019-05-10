import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Portafolio from './pages/portafolio'
import About from './pages/about'
import NotFound from './not-found'
const Content = props => {
  return (
    <div className="content">
      <About />
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
  )
}

export default Content
