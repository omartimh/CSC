import { useState } from 'react'
import Post from './Post'
import Button from './Button'

const Blog = () => {

    const post = () => {
        console.log("Post")
    }

    const [posts, setPost] = useState([
        {
            id: 1,
            author: "John Doe",
            title: "first post", 
            body: "this is my first post !",
            date: "1 hour ago"
        },
        {
            id: 2,
            author: "John Doe",
            title: "second post", 
            body: "this is my second post !!",
            date: "3 days ago"
        },
        {
            id: 3,
            author: "John Doe",
            title: "third post", 
            body: "this is my third post !!!",
            date: "5 hours ago"
        }
    ])

    return (
        <div className="blog">
            <form>
                <textarea name="post" id="post" placeholder="Write something . . . "></textarea>
                <div className="bar">
                    <Button text="Post" className="btn btn-primary" onClick={post}/>
                </div>
            </form>
            <div className="posts">
                {/* <h2 style={{textAlign: "center", fontWeight: "500", color: "#333"}}>Most Recent Posts</h2> */}
                {posts.map((post) => (
                    <Post key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}

export default Blog
