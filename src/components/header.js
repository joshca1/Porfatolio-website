import React from 'react'
import './header.scss'
import ActiveBurger from '../burger-context.js'
const Header = props => {
  const closeBurger = (burger, set) => {
    if (burger.isActive) {
      set({ isActive: false })
    }
  }
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
                <a
                  onClick={() => {
                    closeBurger(burger, setBurger)
                  }}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    closeBurger(burger, setBurger)
                  }}
                  href="#portafolio"
                >
                  Porfafolio
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    closeBurger(burger, setBurger)
                  }}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li className="curriculum">
                <a
                  href="#curri"
                  className="cv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV
                </a>
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/nuxt-app-firebase.appspot.com/o/FRONT-END's%20Resume%20(1).pdf?alt=media&token=50352594-9e49-4f70-9701-af37d4c85deb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linked-icon cv-icon"
                >
                  <i className="fas fa-download" />
                </a>
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
                  href="https://www.linkedin.com/in/jose-ca%C3%B1izales-461413151/"
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
export default Header
