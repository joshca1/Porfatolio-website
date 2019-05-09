import React from 'react'
import './portafolio.scss'
const Portafolio = props => {
  return (
    <div className="portafolio">
      <div className="project-card">
        <div className="project-photo">
          <figure>
            <img
              src="https://previews.123rf.com/images/_ig0rzh_/_ig0rzh_1210/_ig0rzh_121000019/15829874-abstract-background-tecnol%C3%B3gico-brillantes-cuadrados-azules.jpg"
              alt="Computer Hope Guy"
            />
          </figure>
        </div>
        <div className="project-info">
          <h1>Ecommerce site</h1>
          <h5>Tecnologies Used</h5>
          <p>React | Firebase | Redux | React-router</p>
          <div className="project-links">
            <a href="#4">
              <span>
                <i className="fab fa-github" />
              </span>
              <span>Code</span>
            </a>

            <a href="#4">
              <span className="icon is-small">
                <i className="fas fa-play" />
              </span>
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-photo">
          <figure>
            <img
              src="https://previews.123rf.com/images/_ig0rzh_/_ig0rzh_1210/_ig0rzh_121000019/15829874-abstract-background-tecnol%C3%B3gico-brillantes-cuadrados-azules.jpg"
              alt="Computer Hope Guy"
            />
          </figure>
        </div>
        <div className="project-info">
          <h1>Tecnologies Used</h1>
          <p>React | Firebase | Redux | React-router</p>
          <div className="project-links">
            <a href="#4">
              <span>
                <i className="fab fa-github" />
              </span>
              <span>Code</span>
            </a>

            <a href="#4">
              <span className="icon is-small">
                <i className="fas fa-play" />
              </span>
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portafolio
