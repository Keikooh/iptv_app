import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'



// importing css styles
import '../assets/styles/Footer.css'

const Footer = () =>{
  return (
    <div className='footer-container'>
        <section className='about-me'>
            <span>filmverse</span>
            <div className='social-media-list'>
                <i><FontAwesomeIcon icon={faStar} /></i>
                <i><FontAwesomeIcon icon={faStar} /></i>
                <i><FontAwesomeIcon icon={faStar} /></i>
                <i><FontAwesomeIcon icon={faStar} /></i>
            </div>
        </section>
        <section className='copyright'>
            <span>© 2023 Vite All right reserved</span>
        </section>
    </div>
  )
}

export default Footer;