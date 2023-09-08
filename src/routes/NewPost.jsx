import blogFetch from "../axios/config"
import './NewPost.css'

import { useState } from "react"

import { useNavigate } from "react-router-dom"

const NewPost = () => {

  const navigate = useNavigate()
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) =>{
    e.preventDefault()

    const post ={
      title,
      body,
      userId:1
    }
    await blogFetch.post("/posts",{
      body:post
    })
    navigate("/")
  }


  return (
    <div className='new-post'>
      <h2>Inserir novo Post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className='form-control'>
            <label htmlFor="title">Titulo:</label>
            <input 
            type="text" 
            name='title' 
            id='title' 
            placeholder='digite o titulo'
            onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="body">Conteudo:</label>
            <textarea 
            name="body" 
            id="body" 
            cols="30" 
            rows="5" 
            placeholder='digite o conteudo'
            onChange={(e) => setBody(e.target.value)}
            />
            <input type="submit" value="Criar Post" className='btn btn-light' />
        </div>
      </form>
    </div>
  )
}

export default NewPost