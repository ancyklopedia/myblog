import React from 'react'
import "./Newsletter.css"

// [in progress]
const Newsletter = () => {
  return (
    <>
    <form className="news-form">
  <span className="news-title">Newsletter</span>
  <p className="news-description"> Get notification for our every update</p>
  <div>
    <input placeholder="Enter your email" type="email" name="email" id="email-address" />
    <button type="submit">Subscribe</button>
  </div>
</form>
    </>
  )
}

export default Newsletter