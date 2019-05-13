import React from 'react'
import './portafolio.scss'
import project1Preview from '../../images/carro.gif'
import project2Preview from '../../images/second.gif'
const Portafolio = props => {
  // const projectStaticImages = ['imag1', 'image2']
  const projectGif = [project1Preview, project2Preview]
  const prewviewProjectImages = (event, number) => {
    event.target.src = projectGif[number - 1]
  }
  return (
    <div className="portafolio" id="portafolio">
      <div className="project-card">
        <div className="project-photo">
          <img
            src="https://websitesetup.org/wp-content/uploads/2018/04/bluehost-landing-page.jpg"
            alt="Project 1"
            onMouseEnter={event => {
              prewviewProjectImages(event, 1)
            }}
          />
        </div>
        <div className="project-info">
          <div className="info-header">
            <h1>Ecommerce site</h1>
            <h5>Tecnologies Used:</h5>
            <p>Nuxt | Vue | Vuex | Firebase | Bulma</p>
            <h5>Gained Skills:</h5>
            <p>Form Validations | Promises | async await | Es6</p>
            <p>
              Implementing Login, register user, recovery password, wizard to
              make a publication, uploading images, set a location, chat, liked
              publications
            </p>
          </div>
          <div className="project-links">
            <a href="https://bitbucket.org/joshca1/commerce-app">
              <span>
                <i className="fab fa-github" />
              </span>
              <span>Code</span>
            </a>
            <a href="#4">
              <span className="icon">
                <i className="fas fa-play" />
              </span>
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-photo">
          <img
            src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F16%2F2574220d-7737-4c39-a562-8e153a5d1497%2Fwebsite-hero3.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457"
            alt="Project 2"
            onMouseEnter={event => {
              prewviewProjectImages(event, 2)
            }}
          />
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
              <span className="icon">
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
