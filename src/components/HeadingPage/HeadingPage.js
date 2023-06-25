import React from 'react'
import "./HeadingPage.css"
import Icons from '../Icons/Icons'

const HeadingPage = () => {
  return (
    <>
    <nav className="heading-page"> 
        <span className="heading-title"> T e m p l a t e  B l o g </span> 
        <Icons className="icons-headerpage"/>  
        <div className="links-headerpage">
        <a href="/" className="heading-link"> Home </a>
        <a href="/about" className="heading-link"> About </a>
        <a href="/authors" className="heading-link"> Authors </a>
        </div>  
    </nav>
    </>
  )
}

export default HeadingPage