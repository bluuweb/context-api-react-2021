import { useEffect, useState } from "react"
import { useParams } from "react-router"

const Post = () => {

    let params = useParams()

    const [post, setPost] = useState({})

    useEffect(() => {
        getPost()
        // eslint-disable-next-line
    },[])
    
    const getPost = async() => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
            const data = await res.json()
            // console.log(data)
            setPost(data)
        } catch (error) {
            console.log(error)
        }
    }

    if(Object.keys(post).length === 0 ) return <p>loading...</p>

    return (
        <>
          <h1>{post.id} - {post.title}</h1> 
          <p>{post.body}</p> 
        </>
    )
}

export default Post
