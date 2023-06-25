import React from 'react'
import "./BlogPost.css"
import img1 from "../rawData/img1.jpg"

//in process

const BlogPost = ({post}) => {
  
  let authorId=post.userId;
  function authorName(authorId) {
    switch (authorId) {
      case 1: return "Adam";
      case 2: return "Kate";
      case 3: return "Tom";
      case 4: return "Garcia";
      case 5: return "Mary";
      case 6: return "Ellen";
      case 7: return "Polly";
      case 8: return "Dean";
      case 9: return "Sheila";
      case 10: return "Betty";
    }
  }

  return (
    <>
    <div className="card">
      <img src={img1} className="img-post"/>
      <div className="csontainer">
        <div className="container-hover">
          <p className="title">
          {post.title}
        </p> 
        <p className="description">
          {post.body}
        </p>
        <p className="author-name">
          by {authorName(authorId)}
        </p>
        <a className="post-link"> Continue reading</a>
        <a className="post-link" href={"/comments"}> Comments </a>
        </div>
      </div>
    </div>

    </>
    )
}

export default BlogPost