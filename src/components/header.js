import React from 'react'
import './header.scss'
import ActiveBurger from '../burger-context.js'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
const Header = props => {
  return (
    <ActiveBurger.Consumer>
      {({ burger, setBurger }) => (
        <header
          className={
            'header ' + (burger.isActive ? 'burger-active' : 'burger-inactive')
          }
        >
          <div
            className="burger-icon"
            onClick={() => {
              setBurger({ isActive: !burger.isActive })
            }}
          >
            <div />
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/portafolio" activeClassName="active-link">
                  Porfafolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active-link">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active-link">
                  Contact
                </NavLink>
              </li>
              <li>
                <a
                  href="https://github.com/joshca1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linked-icon"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linked-icon"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </header>
      )}
    </ActiveBurger.Consumer>
  )
}
export default withRouter(Header)
