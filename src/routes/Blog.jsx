import { useEffect, useState } from "react"
import {Link, Outlet} from 'react-router-dom'

const Blog = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])
    
    // Pasar a un hooks
    const getPosts = async() => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            // console.log(data)
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    if(!posts) return <p>loading...</p>

    return (
        <div>
          <h1>Blog</h1>  

          {
              posts.map(item => (
                  <h4 key={item.id}>
                      <Link to={`/blog/${item.id}`} >{item.id} - {item.title}</Link>
                  </h4>
              ))
          }
          <Outlet />
        </div>
    )
}

export default Blog
