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
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim, amet labore doloremque id consequatur.",
            date: "1 hour ago"
        },
        {
            id: 2,
            author: "John Doe",
            title: "Second post", 
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat odit consequuntur? Voluptate mollitia, distinctio ipsam veritatis minus culpa quisquam.",
            date: "3 days ago"
        },
        {
            id: 3,
            author: "John Doe",
            title: "Third post", 
            body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, nesciunt dignissimos, consequatur sequi rerum officia corrupti eos excepturi, et culpa maiores saepe quos non! Nesciunt, velit? Ex suscipit enim commodi expedita incidunt corporis excepturi voluptas eos architecto laboriosam? Aut adipisci ullam harum at minus est nisi doloremque illo eos aperiam.",
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
