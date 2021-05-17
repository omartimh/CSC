import { useState } from 'react'
import Post from './Post'
import Button from './Button'
import { IoIosArrowDown } from 'react-icons/io'

const Blog = () => {

    const post = () => {
        console.log("Post")
    }

    const [posts, setPost] = useState([
        {
            id: 1,
            author: "John Doe",
            title: "First post", 
            body: "This is my first post !",
            date: "1 hour ago"
        },
        {
            id: 2,
            author: "John Doe",
            title: "Second post", 
            body: "This is my second post !!",
            date: "3 days ago"
        },
        {
            id: 3,
            author: "John Doe",
            title: "Third post", 
            body: "This is my third post !!!",
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
            <div className="sort">
                <h3 style={{color: "#333"}}>All Posts</h3>
                <ul>
                    <li><Button text="Newest"/></li>
                    <li><Button text="Popular"/></li>
                    <li><Button text="Trending"/></li>
                    <li><Button text="Oldest"/></li>
                    <li><Button text="More" icon={<IoIosArrowDown style={{position: "relative", top: "3px"}}/>}/></li>
                </ul>
            </div>
            <div className="posts">
                {posts.map((post) => (
                    <Post key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}

export default Blog
