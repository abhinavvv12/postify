import React from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate()

    const handleClick = async (e) =>{
        console.log("HANDLER FIRED");


        e.preventDefault()

        console.log("form Submitting")

        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post", formData).then((res) => {
            // alert("Post Created Successfully")
            // e.target.reset
            console.log(res)
            navigate("/feed")
        })
        .catch((err)=>{
            console.log(err)
            alert("Error Creating Post")
        })

    }

  return (
    <section className='create-post-container'>

        <h1>Create Post</h1>

        <form onSubmit={handleClick}>

            <input type="file"  name='image' accept='image/*' />
            <input type="text" name='prompt' placeholder='Enter Caption' />
            <button type='submit' >Submit</button>

        </form>

    </section>
  )
}
export default CreatePost
