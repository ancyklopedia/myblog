import {useState,useEffect} from 'react'
import axios from "axios"
import BlogPost from "../BlogPost/BlogPost.js"
import "./HomePage.css"

const HomePage = () => {

    const [blogData, setBlogData]=useState([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response=>setBlogData(response.data))
      .catch(err=>console.error(err.message))
    }, [])

  return (
    <>
    <div className="carts-blog">
    {blogData.length !== 0 && blogData.map((post)=> {
      return <BlogPost post={post} key={post.id} />
    })}
    </div>
    </>  
    )
}

export default HomePage