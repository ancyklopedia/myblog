import React from 'react'
import ContactPage from "../ContactPage/ContactPage.js"
import "./AboutPage.css"

const AboutPage = () => {
  return (
    <div>
      <div className="about-card"> 
      <p className="about-title"> About us </p>
      <p className="about-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p> 
      </div>
      <ContactPage />
    </div>
  )
}

export default AboutPage