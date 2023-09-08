import { useState, useEffect } from "react"
import blogFetch from "../axios/config"
import {Link} from "react-router-dom"
import './Home.css'

const Home = () => {

  const [post, setPost] = useState([])

  const getPosts = async() =>{
    
    try {

      const response = await blogFetch.get("/posts")
      
      const data = response.data

      setPost(data)

    } catch (error) {
      console.log(error);
    }

  };


  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="home">
      <h1>ULTIMOS POSTS</h1>
      {post.length === 0 ? (<p>Carregando...</p>) : (
        post.map((post) => (
          <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}`}>Ler mais</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home