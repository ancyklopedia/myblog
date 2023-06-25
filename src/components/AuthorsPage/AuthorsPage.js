import React from 'react'
import { AuthorsData } from '../rawData/AuthoursData'
import "./AuthorsPage.css"

const AuthorsPage = () => {
  return (
    <>
    {AuthorsData.map((el)=>{
        return (
            <div className="author-card">
                <h3 className="author-page-name"> {el.authorName} </h3>
                <div className="image-div-authors"><img className="author-image" src={el.photoUrl} /></div>
                
                <p className="author-desc"> {el. description} </p>
            </div>
        )
    })}
    </>
  )
}

export default AuthorsPage