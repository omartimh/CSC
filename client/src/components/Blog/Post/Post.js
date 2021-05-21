import './style.css';
import React from 'react'
import { Link } from 'react-router-dom'
import { BsClockHistory } from 'react-icons/bs'
import { BiUserPin } from 'react-icons/bi'

const Post = ({ post }) => {
    return (
        <div className="post">
            <div className="post-author">
                <Link to="#"><BiUserPin style={{position: "relative", right: "3px", top: "3px"}}/>{post.author}</Link>
            </div>
            <h4>{post.title}</h4><br/>
            <p style={{fontSize: "13px"}}>{post.body}</p>
            <div className="post-bar">
                <span className="date">{post.date}<BsClockHistory style={{position: "relative", left: "5px", top: "3px"}}/></span>
            </div>
        </div>
    )
}

export default Post
