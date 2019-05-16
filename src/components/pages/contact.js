import React, { useState } from 'react'
import './contact.scss'
import emailIcon from '../../images/email.png'
const Contact = props => {
  const [getHiddenM, setHiddenM] = useState(false)
  const e = {
    jdu31: 'gmail.com',
    k9am4: '1989',
    sd3k9: 'joseacm',
    k3m87: '@'
  }
  return (
    <div className="contact" id="contact">
      <div className="contact-header">
        <img src={emailIcon} alt="email" />
        {getHiddenM ? (
          <a
            className="mail"
            href={'mailto:' + e.sd3k9 + e.k9am4 + e.k3m87 + e.jdu31}
          >
            {e.sd3k9 + e.k9am4 + e.k3m87 + e.jdu31}
          </a>
        ) : (
          <button
            onClick={() => {
              setHiddenM(!getHiddenM)
            }}
          >
            show email
          </button>
        )}
      </div>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/jose-ca%C3%B1izales-461413151/"
          target="_blank"
          rel="noopener noreferrer"
          className="linked-icon"
        >
          <i className="fab fa-linkedin" />
        </a>

        <a
          href="https://github.com/joshca1"
          target="_blank"
          rel="noopener noreferrer"
          className="linked-icon"
        >
          <i className="fab fa-github" />
        </a>
      </div>
    </div>
  )
}

export default Contact
