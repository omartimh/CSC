import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    return (
        <div className="post">
            <div className="post-author">
                <Link to="#">{post.author}</Link>
            </div>
            <h3>{post.title}</h3><br/>
            <p>{post.body}</p>
            <div className="post-bar">
                <span className="date">{post.date}</span>
            </div>
        </div>
    )
}

export default Post
