import React from 'react'
import "./ContactPage.css"

// [in progress]

const ContactPage = () => {
  return (
    <>
    <form className="contact-form">
    <div className="contact-title">Contact us</div>
    <input type="text" placeholder="Your email" className="contact-input" />
    <textarea placeholder="Your message"></textarea>
     
    <button>Submit</button>
</form>
    </>
    )
}

export default ContactPage