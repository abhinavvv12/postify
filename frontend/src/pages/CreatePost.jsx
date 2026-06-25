import React from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.target);

        axios.post(`${import.meta.env.VITE_API_URL}/create-post`, formData)
            .then((res) => {
                console.log(res);
                navigate("/feed");
            })
            .catch((err) => {
                console.log(err);
                alert("Error Creating Post");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section className='create-post-container'>

            <h1>Create Post</h1>

            <form onSubmit={handleClick}>

                <input type="file" name='image' accept='image/*' />
                <input type="text" name='prompt' placeholder='Enter Caption' />
                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>

            </form>

        </section>
    )
}
export default CreatePost
