import React, {useState, useEffect}from 'react'
import axios from 'axios'

const FeedPage = () => {
    const [Loading, setLoading] = useState(true);

    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4=",
            prompt: "Beautiful Scenary"
        }
    ])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/posts`).then(
            (res)=>{
                setPosts(res.data.posts)
            }
        ).finally(() => {
            setLoading(false);
        });
    },[])
    if (loading) {
        return <h2>Loading Posts....</h2>
    }

    const handleDelete = async (id) => {
    try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/posts/${id}`);

        setPosts(posts.filter(post => post._id !== id));

        console.log("Deleted Successfully");
    }
    catch(err){
        console.log(err);
    }
}
  return (
    <section className='feed-page'>
        <h3> Feed Section </h3>
        {
            posts.length>0 ? (
                posts.map((post) => (
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt="" />
                        <p>{post.caption}</p>
                        <button onClick={() => handleDelete(post._id)}>Delete
                        </button>

                    </div>
                ) )
            ) : (<h1>No posts available</h1> )
        }
    </section>
  )
}

export default FeedPage
