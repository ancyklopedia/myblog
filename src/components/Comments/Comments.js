import React from 'react'
import "./CommentsPage.css"

// in progress

const Comments = ({comments}) => {
    
  return (
    <div className="card-single-comment">
        <p className="name-comments-page">{comments.name}</p>
        <a href={`mailto: ${comments.email}`} className="email-comments-page">{comments.email}</a>
        <p className="body-comments-page">{comments.body}</p>
    </div>
  )
}

export default Comments