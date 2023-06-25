import {useState, useEffect} from "react"
import axios from "axios"
import Comments from "./Comments"
import "./CommentsPage.css"

const CommentsPage = () => {

  const [comments, setComments]=useState([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(response=>setComments(response.data))
      .catch(err=>console.error(err.message))
    }, [])

  return (
    <div className="card-comments-page">
      {comments !== 0 && comments.map((comments)=>{
        return <Comments comments={comments} key={comments.id}/>
      })}
    </div>
  )
}

export default CommentsPage